import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4">
      <div></div>
      <Link href="/login">
        <button className="btn btn-accent">Login</button>
      </Link>
    </nav>
  );
}

export default Navbar;
