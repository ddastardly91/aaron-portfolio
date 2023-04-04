import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <>
      <div className="border border-neutral h-[630px] relative bg-header-background bg-contain bg-top bg-no-repeat">
        <div className="avatar online top-56 left-6 z-10">
          <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              alt="avatar"
            />
          </div>
        </div>
        <div className="absolute top-72 bottom-0 h-auto w-full bg-neutral pt-20 px-6 text-white">
          <h1 className="text-4xl font-bold mb-2">Aaron Latham</h1>
          <div className="flex gap-2">
            <div className="badge text-white bg-orange-500 p-3">HTML</div>
            <div className="badge text-white bg-blue-500 p-3">CSS</div>
            <div className="badge text-white bg-yellow-500 p-3">Javascript</div>
            <div className="badge text-white bg-blue-600 p-3">React</div>
            <div className="badge text-white bg-zinc-400 p-3">Express</div>
            <div className="badge text-white bg-green-600 p-3">MongoDB</div>
          </div>
          <div className="divider"></div>
          <p className="mb-2">
            Aspiring Full-stack web developer from Preston, Lancashire! 🚀
          </p>
          <p>
            On the self-teaching journey in the world of web development,
            currently learning to build REST API's using Express.js with MongoDB
            as the database.
          </p>
        </div>
      </div>
      <div className="h-16 bg-neutral">
        <div className="flex items-center justify-between h-full">
          <Link
            href="/"
            className="flex items-center justify-center w-full h-full text-center hover:bg-slate-800 cursor-pointer hover:text-secondary"
          >
            Posts
          </Link>
          <Link
            href="/about"
            className="flex items-center justify-center w-full h-full text-center hover:bg-slate-800 cursor-pointer hover:text-secondary"
          >
            About
          </Link>
          <Link
            href="/guestbook"
            className="flex items-center justify-center w-full h-full text-center hover:bg-slate-800 cursor-pointer hover:text-secondary"
          >
            Guestbook
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center w-full h-full text-center hover:bg-slate-800 cursor-pointer hover:text-secondary"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
