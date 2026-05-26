function Nav() {
  return (
    <nav className="w-full h-[60px] px-6 bg-white border-b border-zinc-200/70 flex items-center justify-center">
      <div className="w-full max-w-6xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-zinc-900 tracking-tight">
            MailMagic
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-sm font-medium text-zinc-500 rounded-md hover:bg-zinc-100 hover:text-zinc-900 transition-colors">
            Sign up
          </button>
          <button className="px-4 py-1.5 bg-zinc-900 text-white text-sm font-medium rounded-md hover:opacity-85 transition-opacity">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
