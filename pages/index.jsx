import Post from "@/components/Post";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/auth";
import { PostContext } from "@/context/posts";

function Home() {
    const authContext = useContext(AuthContext);
    const { user } = authContext;

    const postContext = useContext(PostContext);
    const { getPosts, posts } = postContext;

    const [toggleCreatePost, setToggleCreatePost] = useState(true);

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            {user && (
                <div className="bg-neutral p-6 text-center">
                    <button
                        className="btn btn-primary w-full"
                        onClick={() => setToggleCreatePost(!toggleCreatePost)}
                    >
                        {toggleCreatePost === false ? "Create Post" : "Close"}
                    </button>
                </div>
            )}
            {toggleCreatePost && user && (
                <div className="bg-neutral p-6">
                    <form className="form-control w-full flex flex-col gap-3">
                        <div>
                            <label className="label">
                                <span className="label-text">Title:</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter a post title."
                                className="input input-bordered input-accent w-full"
                                onChange={(e) =>
                                    setNewPost({
                                        ...newPost,
                                        title: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Tag:</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter post tag."
                                className="input input-bordered input-accent w-full"
                                onChange={(e) =>
                                    setNewPost({
                                        ...newPost,
                                        tag: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Content:</span>
                                </label>
                                <textarea
                                    className="textarea textarea-md textarea-bordered textarea-accent h-36"
                                    placeholder="What do you want to post?."
                                    onChange={(e) =>
                                        setNewPost({
                                            ...newPost,
                                            content: e.target.value,
                                        })
                                    }
                                ></textarea>
                            </div>
                        </div>

                        <div className="mt-3">
                            <button className="btn btn-secondary w-full">
                                Create Post
                            </button>
                        </div>
                    </form>
                </div>
            )}
            {!posts ? (
                <div className="bg-neutral p-6 text-xl text-center">
                    Sorry no posts, check back later.
                </div>
            ) : (
                <div>
                    {posts.map((post) => {
                        return <Post post={post} key={post.id} />;
                    })}
                </div>
            )}
        </>
    );
}

export default Home;
