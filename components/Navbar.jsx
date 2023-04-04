import { useContext, useEffect } from "react";
import UserContext from "@/context/user";

import Link from "next/link";

function Navbar() {
  const context = useContext(UserContext);
  const { isUserLogged, handleLogout } = context;

  return (
    <nav className="flex items-center justify-between px-10 py-4">
      <div>Logo</div>
      {!isUserLogged ? (
        <Link href="/login">
          <button className="btn btn-accent">Login</button>
        </Link>
      ) : (
        <Link href="/">
          <button className="btn btn-accent" onClick={handleLogout}>
            Logout
          </button>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
