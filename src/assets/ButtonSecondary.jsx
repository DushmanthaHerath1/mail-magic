function ButtonSecondary({ children, text, className = "", ...props }) {
  return (
    <button
      className={`px-3 py-1.5 text-sm font-medium text-zinc-500 rounded-md hover:bg-zinc-100 hover:text-zinc-900 transition-colors ${className}`}
      {...props}
    >
      {children || text}
    </button>
  );
}

export default ButtonSecondary;
