import ButtonPrimary from "../assets/ButtonPrimary";
import ButtonSecondary from "../assets/ButtonSecondary";

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
          <ButtonSecondary>Signup</ButtonSecondary>
          <ButtonPrimary className="px-4 py-1.5 rounded-md">
            Login
          </ButtonPrimary>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
