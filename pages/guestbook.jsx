import Chatbubble from "@/components/Chatbubble";
import React, { useState, useContext, useEffect } from "react";
import { PostContext } from "@/context/posts";

function Guestbook() {
    const postContext = useContext(PostContext);
    const {
        getGuestbookMessages,
        guestbookMessages,
        createGuestbookMessage,
        errorMessage,
    } = postContext;

    const [toggleSignGuestbook, setToggleSignGuestbook] = useState(false);

    const [guestbookMessage, setGuestbookMessage] = useState({
        avatarURL: "",
        name: "",
        websiteURL: "",
        message: "",
    });

    const handleGuestbookSubmit = (e) => {
        e.preventDefault();

        createGuestbookMessage(guestbookMessage);
    };

    useEffect(() => {
        getGuestbookMessages();
    }, []);

    return (
        <div className="p-6 bg-neutral">
            <div className="text-center mb-5">
                <button
                    className="btn btn-primary"
                    onClick={() => setToggleSignGuestbook(!toggleSignGuestbook)}
                >
                    {toggleSignGuestbook ? "Close" : "Sign Guestbook"}
                </button>
            </div>

            {toggleSignGuestbook && (
                <div className="bg-neutral px-6">
                    <form
                        className="form-control w-full flex flex-col gap-3"
                        onSubmit={handleGuestbookSubmit}
                    >
                        <div>
                            <label className="label">
                                <span className="label-text">Avatar URL:</span>
                            </label>
                            <input
                                type="text"
                                placeholder="https://somewebsiteurl.com/avatar.png"
                                className="input input-bordered input-accent w-full"
                                onChange={(e) =>
                                    setGuestbookMessage({
                                        ...guestbookMessage,
                                        avatarURL: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Name:</span>
                            </label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="input input-bordered input-accent w-full"
                                onChange={(e) =>
                                    setGuestbookMessage({
                                        ...guestbookMessage,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Website URL:</span>
                            </label>
                            <input
                                type="text"
                                placeholder="http://www.google.com"
                                className="input input-bordered input-accent w-full"
                                onChange={(e) =>
                                    setGuestbookMessage({
                                        ...guestbookMessage,
                                        websiteURL: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message:</span>
                                </label>
                                <textarea
                                    className="textarea textarea-md textarea-bordered textarea-accent h-28"
                                    placeholder="What message do you want to leave on the guestbook?"
                                    onChange={(e) =>
                                        setGuestbookMessage({
                                            ...guestbookMessage,
                                            message: e.target.value,
                                        })
                                    }
                                ></textarea>
                            </div>
                        </div>

                        <span>{errorMessage}</span>

                        <div className="my-4">
                            <button className="btn btn-secondary w-full">
                                Create Post
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {guestbookMessages < 1 ? (
                <div className="bg-neutral p-6 text-xl text-center">
                    No messages 😭, why not be the first?
                </div>
            ) : (
                <div>
                    {guestbookMessages.map((message) => {
                        return (
                            <Chatbubble message={message} key={message.id} />
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Guestbook;
