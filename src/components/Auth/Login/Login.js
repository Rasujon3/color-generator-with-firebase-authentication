import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import "../../../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailChange = (e) => {
    const emailregex = /\S+@\S+\.\S+/;
    const validEmail = emailregex.test(e.target.value);
    console.log(validEmail);

    // setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="login-container">
      <div className="login-title">LOGIN</div>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Your Email"
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
