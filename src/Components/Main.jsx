function Main() {
  return (
    <div className="p-8 mt-4 w-full max-w-6xl flex flex-col gap-4">
      <form>
        <div className="flex flex-col gap-1.5 mb-4">
          <label
            htmlFor="recipient"
            className="text-sm font-semibold text-zinc-800"
          >
            Recipient Name
          </label>
          <input
            type="email"
            id="recipient"
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
            id="recipient"
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
            rows="5"
            placeholder="Write your email here..."
            className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-lg text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all duration-200 shadow-sm resize-y"
          ></textarea>
        </div>

        <div className="mt-4 flex justify-end mb-4">
          <button
            type="button"
            className="px-6 py-2.5 bg-zinc-900 text-white font-semibold text-sm rounded-lg hover:bg-zinc-800 transition-colors shadow-md"
          >
            Generate Email
          </button>
        </div>
      </form>
    </div>
  );
}

export default Main;
