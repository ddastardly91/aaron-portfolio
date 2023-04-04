import { createContext, useState } from "react";
import supabase from "@/lib/supabase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useState(null);

    // Login function
    const userLogin = async (credentials) => {
        const { email, password } = credentials;

        setLoading(true);

        // Supabase auth login
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setTimeout(() => {
                setErrorMessage("");
            }, 2000);

            return setErrorMessage(error.message);
        }

        setLoading(false);
        setUser(data.user);
    };

    return (
        <AuthContext.Provider
            value={{ user, userLogin, loading, setLoading, errorMessage }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
