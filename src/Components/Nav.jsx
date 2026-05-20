function Nav() {
  return (
    <div className="w-full p-4 shadow-md flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto flex justify-between">
        <h3 className="text-2xl font-extrabold text-zinc-800 tracking-tight ">
          MailMagic
        </h3>
        <div className="flex gap-4">
          <button className="bg-zinc-800 text-white text-sm font-semibold px-4 py-2 rounded-md">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
