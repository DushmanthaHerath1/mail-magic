function Header() {
  return (
    <header className="w-full py-4 px-5 flex flex-col items-center justify-center font-sans">
      <h1 className="text-center text-5xl md:text-7xl font-extrabold text-zinc-800 tracking-tight leading-tight max-w-4xl p-6">
        Draft Faster with <span className="text-blue-600">MailMagic</span>
      </h1>
      <h3 className="text-center font-semibold text-lg text-zinc-700">
        Draft professional emails to your lecturers or bosses in seconds.
      </h3>
    </header>
  );
}

export default Header;
