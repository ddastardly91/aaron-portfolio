import React, { useState } from "react";

function login() {
  const [loginDetails, setLoginDetails] = useState({
    email: "johndoe@mail.com",
    password: "Enter password",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(loginDetails);
  };

  return (
    <div className="p-6 bg-neutral">
      <h2 className="text-3xl text-white">Admin Login</h2>
      <form
        className="form-control w-full mt-6 flex flex-col gap-3"
        onSubmit={handleLogin}
      >
        <div>
          <label className="label">
            <span className="label-text">Email:</span>
          </label>
          <input
            type="text"
            placeholder={loginDetails.email}
            className="input input-bordered input-accent w-full"
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, email: e.target.value })
            }
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Password:</span>
          </label>
          <input
            type="password"
            placeholder={loginDetails.password}
            className="input input-bordered input-accent w-full"
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
            }
          />
        </div>

        <div className="mt-3">
          <button className="btn btn-secondary w-full">Login</button>
        </div>
      </form>
    </div>
  );
}

export default login;
