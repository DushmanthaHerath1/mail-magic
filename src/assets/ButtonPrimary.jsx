function ButtonPrimary({ children, text, className = "", ...props }) {
  return (
    <button
      className={`bg-zinc-900 text-white text-sm font-medium hover:opacity-85 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children || text}
    </button>
  );
}

export default ButtonPrimary;
