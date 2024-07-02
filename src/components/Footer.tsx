import NavItems from "./NavItems";

function Footer() {
  return (
    <footer className="flex items-center flex-col">
      <nav>
        <NavItems />
      </nav>
      <p className="text-zinc-600 py-6">
        Copyright &copy; {new Date().getFullYear()} Ghislain Pango. All Rights
        Reserved.
      </p>
    </footer>
  );
}

export default Footer;
