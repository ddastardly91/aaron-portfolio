import React from "react";
import Link from "next/link";

function Chatbubble({ message }) {
    return (
        <div className="flex flex-col overflow-x-hidden">
            {message.id % 2 === 0 ? (
                <div>
                    <span className="font-semibold">{message.name}</span>
                    <div className="chat chat-start flex items-center">
                        <div className="chat-image avatar tooltip tooltip-left tooltip-info">
                            <div className="w-14 rounded-full">
                                <Link href={message.websiteURL} target="_blank">
                                    <img src={message.avatarURL} alt="avatar" />
                                </Link>
                            </div>
                        </div>
                        <div className="chat-bubble chat-bubble-accent">
                            {message.message}
                        </div>
                    </div>
                    <span className="pl-16 text-sm flex justify-start mb-4">
                        {new Date(message.created_at).toLocaleDateString()}{" "}
                        &bull;{" "}
                        {new Date(message.created_at).toLocaleTimeString()}
                    </span>
                </div>
            ) : (
                <div className="flex flex-col">
                    <span className="font-semibold text-right">
                        {message.name}
                    </span>
                    <div className="chat chat-end flex flex-row-reverse items-center">
                        <div className="chat-image avatar tooltip tooltip-right tooltip-info">
                            <div className="w-14 rounded-full">
                                <Link href={message.websiteURL} target="_blank">
                                    <img src={message.avatarURL} alt="avatar" />
                                </Link>
                            </div>
                        </div>
                        <div className="chat-bubble chat-bubble-secondary">
                            {message.message}
                        </div>
                        <div></div>
                    </div>
                    <span className="pr-16 text-sm flex justify-end">
                        {new Date(message.created_at).toLocaleDateString()}{" "}
                        &bull;{" "}
                        {new Date(message.created_at).toLocaleTimeString()}
                    </span>
                </div>
            )}
        </div>
    );
}

export default Chatbubble;
