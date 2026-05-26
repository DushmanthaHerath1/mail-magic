import { useState } from "react";
import { generateMagicEmail } from "../ai";
import ReactMarkdown from "react-markdown";

function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedEmail, setGeneratedEmail] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    setIsLoading(true);
    try {
      const aiResponse = await generateMagicEmail(data);
      setGeneratedEmail(aiResponse);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!generatedEmail) return;
    navigator.clipboard.writeText(generatedEmail);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="w-full flex flex-col items-center px-6 py-10">
      {/* Page header */}
      <div className="text-center mb-8">
        <h1 className="text-xl font-medium text-zinc-900 mb-1">
          Generate your email
        </h1>
        <p className="text-sm text-zinc-500">
          Fill in the details and let AI do the heavy lifting.
        </p>
      </div>

      {/* Form card */}
      <div className="w-full max-w-xl bg-white border border-zinc-200 rounded-xl p-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name + Email row */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="recipientName"
                className="text-xs font-medium text-zinc-700"
              >
                Recipient name
              </label>
              <input
                type="text"
                name="recipientName"
                id="recipientName"
                placeholder="e.g. Boss, Sarah"
                className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="recipientEmail"
                className="text-xs font-medium text-zinc-700"
              >
                Recipient email
              </label>
              <input
                type="email"
                name="recipientEmail"
                id="recipientEmail"
                placeholder="boss@company.com"
                className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Tone */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="emailTone"
              className="text-xs font-medium text-zinc-700"
            >
              Email tone
            </label>
            <select
              id="emailTone"
              name="tone"
              defaultValue=""
              className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all cursor-pointer"
            >
              <option value="" disabled>
                Select a tone...
              </option>
              <option value="professional">Professional (Boss/Lecturer)</option>
              <option value="casual">Casual (Colleague)</option>
              <option value="urgent">Urgent (Action Required)</option>
            </select>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-100" />

          {/* Message body */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="text-xs font-medium text-zinc-700"
            >
              Message body
            </label>
            <textarea
              id="message"
              name="emailBody"
              rows="5"
              placeholder="Write your email here..."
              className="w-full px-3 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all resize-y"
            />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs text-zinc-400">
              Keep it concise for best results
            </span>
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center gap-2 px-5 py-2 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 disabled:opacity-50 transition-colors"
            >
              {isLoading ? "Generating..." : "Generate email"}
            </button>
          </div>
        </form>
      </div>

      {/* Output card */}
      {generatedEmail && (
        <div className="w-full max-w-xl mt-4 bg-white border border-zinc-200 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-100">
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
              Generated email
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-500 border border-zinc-200 rounded-md hover:bg-zinc-50 hover:text-zinc-800 transition-colors"
            >
              {isCopied ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="px-5 py-4 prose prose-sm max-w-none text-zinc-700">
            <ReactMarkdown>{generatedEmail}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
