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
    // console.log(validEmail);
    if (validEmail) {
      setError("");
      setEmail(e.target.value);
    } else {
      setError("Invalid Email");
    }
  };

  const handlePasswordChange = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);
    if (validPassword) {
      setError("");
      setPassword(e.target.value);
    } else {
      setError("Password must be minimum 6 chharacters");
    }
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
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
