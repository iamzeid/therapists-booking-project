import React from "react";
import { auth, provider } from "./config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Register = () => {
  const handleGoogleRegister = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("User registered with Google:", user);
      })
      .catch((error) => {
        // Handle Errors here.
        console.error("Error registering with Google:", error);
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <form action="/register" method="post">
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" />
        <br />
        <button type="button" onClick={handleGoogleRegister}>
          Register with Google
        </button>
      </form>
    </div>
  );
};

export default Register;
