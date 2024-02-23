import React, { useState, useEffect } from "react";
import { auth, provider } from "./config";
import { signInWithPopup, signOut } from "firebase/auth";

function Login() {
  const [value, setValue] = useState(null);
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("email");
    setValue(null);
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <>
      {value ? (
        <div>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <h2>Sign In To Your Account</h2>
          <button onClick={handleClick}>Sign In With Google</button>
          <form>
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" name="email" />
            <br />
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" />
            <br />
            <button type="submit">Login</button>
          </form>
          <a href="#">Forgot Password?</a>
          <br />
          Don't have an account? <a href="/register">Register Now!</a>
        </div>
      )}
    </>
  );
}

export default Login;
