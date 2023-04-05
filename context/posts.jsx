import { createContext, useState } from "react";
import supabase from "@/lib/supabase";

const PostContext = createContext();

const PostProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [posts, setPosts] = useState(null);
    const [guestbookMessages, setGuestbookMessages] = useState(null);

    // Login function
    const getPosts = async () => {
        setLoading(true);

        const { data: posts, error } = await supabase
            .from("posts")
            .select("*")
            .order("created_at", { ascending: false });

        if (!posts) {
            return setErrorMessage("No posts, check back later.");
        }

        if (error) {
            return console.log(error.message, "getPosts error");
        }

        setLoading(false);
        setPosts(posts);
    };

    const createPost = async (postData) => {
        setLoading(true);

        const { data, error } = await supabase.from("posts").insert([postData]);

        if (error) {
            return setErrorMessage(error.message);
        }

        setLoading(false);
        getPosts();
    };

    const getGuestbookMessages = async () => {
        setLoading(true);

        const { data: guestbookMessages, error } = await supabase
            .from("guestbook")
            .select("*")
            .order("created_at", { ascending: false });

        if (!guestbookMessages) {
            return setErrorMessage("No guestbook messages, why not leave one?");
        }

        if (error) {
            return console.log(error.message, "getGuestbookMessages error");
        }

        setLoading(false);
        setGuestbookMessages(guestbookMessages);
    };

    const createGuestbookMessage = async (credentials) => {
        const { name, avatarURL, websiteURL, message } = credentials;

        const { data, error } = await supabase.from("guestbook").insert([
            {
                name,
                avatarURL,
                websiteURL,
                message,
            },
        ]);

        if (error) {
            return console.log(error.message, "createGuestbookMessage error");
        }

        getGuestbookMessages();
    };

    return (
        <PostContext.Provider
            value={{
                posts,
                getPosts,
                createPost,
                loading,
                errorMessage,
                guestbookMessages,
                getGuestbookMessages,
                createGuestbookMessage,
            }}
        >
            {children}
        </PostContext.Provider>
    );
};

export { PostContext, PostProvider };
