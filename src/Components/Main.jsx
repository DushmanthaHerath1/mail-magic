import { useState } from "react";

import { generateMagicEmail } from "../ai";

import ReactMarkdown from "react-markdown";
import { Clipboard, Check } from "lucide-react";
import remarkBreaks from "remark-breaks";

import ButtonPrimary from "../assets/ButtonPrimary";
import TextField from "../assets/TextField";
import SelectionMenu from "../assets/SelectionMenu";
import TextArea from "../assets/TextArea";

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

  const toneOptions = [
    { value: "professional", label: "Professional (Boss/Lecturer)" },
    { value: "casual", label: "Casual (Colleague)" },
    { value: "urgent", label: "Urgent (Action Required)" },
  ];

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
            <TextField
              htmlFor="recipientName"
              lableName="Recipient name"
              type="text"
              name="recipientName"
              id="recipientName"
              placeholder="e.g. Boss, Sarah"
            />
          </div>

          {/* Tone */}
          <SelectionMenu
            label="Email Tone"
            id="emailtone"
            name="Select a tone..."
            options={toneOptions}
          />

          {/* Divider */}
          <div className="border-t border-zinc-100" />

          {/* Message body */}
          <TextArea
            htmlFor="message"
            id="message"
            name="emailBody"
            rows="5"
            placeholder="Write your email here..."
            label="Message Body"
          />

          {/* Footer */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs text-zinc-400">
              Keep it concise for best results
            </span>

            <ButtonPrimary
              type="submit"
              disabled={isLoading}
              className="flex items-center gap-2 px-5 py-2 rounded-lg"
            >
              {isLoading ? "Generating..." : "Generate Email"}
            </ButtonPrimary>
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
              {isCopied ? (
                <div className="flex flex-row items-center gap-2">
                  <Check size={15} /> Copied!
                </div>
              ) : (
                <div className="flex flex-row items-center gap-2">
                  <Clipboard size={15} />
                  Copy
                </div>
              )}
            </button>
          </div>
          <div className="px-5 py-4 prose prose-sm max-w-none text-zinc-700">
            <ReactMarkdown remarkPlugins={[remarkBreaks]}>
              {generatedEmail}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
