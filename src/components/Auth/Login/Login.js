import React, { useEffect, useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../styles/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const handleEmailChange = (e) => {
    const emailregex = /\S+@\S+\.\S+/;
    const validEmail = emailregex.test(e.target.value);
    // console.log(validEmail);
    if (validEmail) {
      setErrors({ ...errors, email: "" });
      setUserInfo({ ...userInfo, email: e.target.value });
    } else {
      setErrors({ ...errors, email: "Invalid Email" });
    }
  };

  const handlePasswordChange = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);
    if (validPassword) {
      setErrors({ ...errors, password: "" });
      setUserInfo({ ...userInfo, password: e.target.value });
    } else {
      setErrors({
        ...errors,
        password: "Password must be minimum 6 characters",
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  useEffect(() => {
    const error = hookError || googleError;
    if (error) {
      switch (error?.code) {
        case "auth/invalid-email":
          toast("Invalid email");
          break;
        case "auth/email-already-exists":
          toast("Email already exists");
          break;
        case "auth/invalid-password":
          toast("Wrong Password");
          break;
        default:
          toast("Something went wrong");
          break;
      }
    }
  }, [hookError, googleError]);

  return (
    <div className="login-container">
      <div className="login-title">LOGIN</div>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Your Email"
          onChange={handleEmailChange}
        />
        {errors?.email && <p className="error-message">{errors.email}</p>}
        <input
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
        <button>Login</button>
        {/* {error && <p className="error-message">{error}</p>} */}
        {/* {hookError && <p className="error-message">{hookError?.message}</p>} */}
        <ToastContainer />
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
      <button onClick={() => signInWithGoogle()}>Google</button>
    </div>
  );
};

export default Login;
