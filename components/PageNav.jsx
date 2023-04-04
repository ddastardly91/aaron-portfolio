import React from "react";
import Link from "next/link";

function PageNav() {
    return (
        <div className="h-16 bg-neutral border-t-2 border-slate-800">
            <div className="flex items-center justify-between h-full">
                <Link
                    href="/"
                    scroll={false}
                    className="flex items-center justify-center w-full h-full text-center hover:bg-slate-800 cursor-pointer hover:text-secondary"
                >
                    Posts
                </Link>
                <Link
                    href="/about"
                    scroll={false}
                    className="flex items-center justify-center w-full h-full text-center hover:bg-slate-800 cursor-pointer hover:text-secondary"
                >
                    About
                </Link>
                <Link
                    href="/guestbook"
                    scroll={false}
                    className="flex items-center justify-center w-full h-full text-center hover:bg-slate-800 cursor-pointer hover:text-secondary"
                >
                    Guestbook
                </Link>
                <Link
                    href="/contact"
                    scroll={false}
                    className="flex items-center justify-center w-full h-full text-center hover:bg-slate-800 cursor-pointer hover:text-secondary"
                >
                    Contact
                </Link>
            </div>
        </div>
    );
}

export default PageNav;
