import { useState } from "react";
import { generateMagicEmail } from "../ai";
import ReactMarkdown from "react-markdown";

function Main() {
  const [isLoading, setIsloading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log("Form Data Submitted", data);

    setIsloading(true);

    try {
      const aiResponse = await generateMagicEmail(data);
      setGeneratedEmail(aiResponse);
    } catch (err) {
      console.error(err);
    } finally {
      setIsloading(false);
    }
  };
  const [generatedEmail, setGeneratedEmail] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (!generatedEmail) return;

    navigator.clipboard.writeText(generatedEmail);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(true);
    }, 2000);
  };

  return (
    <div className="p-8 mt-4 w-full flex flex-col items-center">
      <form
        className="w-full sm:max-w-lg md:max-w-2xl items-center gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-1.5 mb-4">
          <label
            htmlFor="recipient"
            className="text-sm font-semibold text-zinc-800"
          >
            Recipient Name
          </label>
          <input
            type="text"
            name="recipientName"
            id="recipientName"
            placeholder="eg: Boss, (Name)"
            className="w-full px-4 py-2.5 bg-white border border-zinc-300 rounded-lg text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all duration-200 shadow-sm"
          />
        </div>

        <div className="flex flex-col gap-1.5 mb-4">
          <label
            htmlFor="recipient"
            className="text-sm font-semibold text-zinc-800"
          >
            Recipient Email
          </label>
          <input
            type="email"
            name="recipientEmail"
            id="recipientEmail"
            placeholder="boss@company.com"
            className="w-full px-4 py-2.5 bg-white border border-zinc-300 rounded-lg text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all duration-200 shadow-sm"
          />
        </div>

        <div className="flex flex-col gap-1.5 mb-4">
          <label
            htmlFor="emailTone"
            className="text-sm font-semibold text-zinc-800"
          >
            Email Tone
          </label>
          <select
            id="emailTone"
            name="tone"
            defaultValue=""
            className="w-full px-4 py-2.5 bg-white border border-zinc-300 rounded-lg text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all duration-200 shadow-sm cursor-pointer"
          >
            <option value="" disabled>
              Select a tone...
            </option>
            <option value="professional">Professional (Boss/Lecturer)</option>
            <option value="casual">Casual (Colleague)</option>
            <option value="urgent">Urgent (Action Required)</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5 mb-4">
          <label
            htmlFor="message"
            className="text-sm font-semibold text-zinc-800"
          >
            Message Body
          </label>
          <textarea
            id="message"
            name="emailBody"
            rows="5"
            placeholder="Write your email here..."
            className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-lg text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all duration-200 shadow-sm resize-y"
          ></textarea>
        </div>

        <div className="mt-4 flex justify-end mb-4">
          <button
            type="submit"
            className="px-6 py-2.5 bg-zinc-900 text-white font-semibold text-sm rounded-lg hover:bg-zinc-800 transition-colors shadow-md disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? "Generating Magic..." : "Generate Email"}
          </button>
        </div>
      </form>

      {generatedEmail !== "" && (
        <section className="bg-white p-6 rounded-lg shadow-md w-full">
          <div className="prose max-w-none">
            <ReactMarkdown>{generatedEmail}</ReactMarkdown>
          </div>
        </section>
      )}
      <div className="flex just-end mb-4">
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-zinc-200 text-zinc-800 font-semibold text-sm rounded-md hover:bg-zinc-300 transition-colors flex items-center gap-2"
        >
          {isCopied ? "Copied!" : "Copy to Clipboard"}
        </button>
      </div>
    </div>
  );
}

export default Main;
