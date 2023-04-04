import React from "react";
import Image from "next/image";

function Hero() {
    return (
        <>
            <div className="border border-neutral h-[400px] bg-header-background bg-cover" />
            <div className="h-20 bg-neutral">
                <div>
                    <button className="btn btn-secondary float-right mr-6 mt-6">
                        Follow
                    </button>
                </div>
                <div className="avatar online pl-7 top-[-80px]">
                    <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                            alt="avatar"
                        />
                    </div>
                </div>
            </div>
            <div className="px-6 bg-neutral">
                <h1 className="text-4xl text-white font-bold mb-3 pt-4">
                    Aaron Latham
                </h1>
                <div className="flex gap-2 flex-wrap">
                    <div className="badge text-white bg-orange-500 p-3">
                        HTML
                    </div>
                    <div className="badge text-white bg-blue-500 p-3">CSS</div>
                    <div className="badge text-white bg-yellow-500 p-3">
                        Javascript
                    </div>
                    <div className="badge text-white bg-blue-600 p-3">
                        React
                    </div>
                    <div className="badge text-white bg-zinc-400 p-3">
                        Express
                    </div>
                    <div className="badge text-white bg-green-600 p-3">
                        MongoDB
                    </div>
                </div>
            </div>
            <div className="p-6 bg-neutral text-white">
                <p className="mb-4">
                    Aspiring Full-stack web developer from Preston, Lancashire!
                    🚀
                </p>
                <p>
                    On the self-teaching journey in the world of web
                    development, currently learning to build REST API's using
                    Express.js with MongoDB as the database.
                </p>
            </div>
        </>
    );
}

export default Hero;
