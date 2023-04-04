import React from "react";

function Post({ post }) {
    return (
        <div className="p-6 pb-1 bg-neutral h-auto">
            <div>
                <div className="flex gap-3 mb-3">
                    <div className="avatar">
                        <div className="w-14 rounded-full border-2 ring-offset-base-100 ring-offset-2">
                            <img
                                src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                                alt="avatar"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-white">
                            {post.author}{" "}
                            <span className="text-sm text-zinc-400">
                                &bull;{" "}
                                {new Date(post.created_at).toLocaleDateString()}{" "}
                                &bull;{" "}
                                {new Date(post.created_at).toLocaleTimeString()}
                            </span>
                        </h2>
                        <div className="badge badge-primary">{post.tag}</div>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl text-zinc-100">{post.title}</h1>
                    <p>{post.content}</p>
                </div>
                <div className="divider mb-0"></div>
            </div>
        </div>
    );
}

export default Post;
