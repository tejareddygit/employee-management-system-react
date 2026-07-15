import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(Email, password);
    setEmail("");
    setpassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="rounded-2xl border-2 border-emerald-600  p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
            placeholder="Enter your email"
            className="border-2 text-black outline-none bg-transparent border-emerald-600 text-xl rounded-full py-3 px-5 placeholder:text-gray-400"
          />
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
            className=" mt-3 border-2 text-black outline-none bg-transparent border-emerald-600 text-xl rounded-full py-3 px-5 placeholder:text-gray-400"
            type="password"
            placeholder="Enter password   "
          />
          <button className="mt-5 text-white outline-none bg-emerald bg-emerald-600 text-xl rounded-full py-3 px-5 placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
