function TextArea({ id, label, name, className = "", ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor="message" className="text-xs font-medium text-zinc-700">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        {...props}
        className={`w-full px-3 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all resize-y ${className}`}
      />
    </div>
  );
}

export default TextArea;
