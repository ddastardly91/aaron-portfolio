import { createContext, useState } from "react";
import { useRouter } from "next/router";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isUserLogged, setIsUserLogged] = useState(null);

  const handleLogin = async (credentials) => {
    setLoading(true);

    let res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    let user = await res.json();

    if (!user.success) {
      setLoading(false);
      return setErrorMsg("Invalid credentials.");
    }

    setLoading(false);
    setErrorMsg("");
    setIsUserLogged(user.data);

    router.push("/");
  };

  const handleLogout = () => {
    setIsUserLogged(null);
  };

  return (
    <UserContext.Provider
      value={{ errorMsg, handleLogin, handleLogout, isUserLogged }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
