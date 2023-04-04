import React from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div className="p-6 bg-slate-800">
      <div className="flex items-center justify-between">
        <p>
          Made with <span className="text-accent">♥️</span> by Aaron
        </p>
        <div>
          <Link href="https://github.com/ddastardly91" target="_blank">
            <FaGithub className="hover:text-accent" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
