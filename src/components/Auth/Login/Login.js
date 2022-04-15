import React, { useState } from "react";
import "../../../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="login-container">
      <div className="login-title">LOGIN</div>
      <form className="login-form">
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
