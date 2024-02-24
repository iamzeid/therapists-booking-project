import React from "react";
import { auth, provider } from "./config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import * as Icon from "react-bootstrap-icons";

const Register = () => {
  const handleGoogleRegister = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const { displayName, email, phoneNumber, photoURL, uid, refreshToken } =
          result.user;

        // Add user to json-server
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            displayName,
            email,
            phoneNumber,
            photoURL,
            uid,
            token,
            refreshToken,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            localStorage.setItem("displayName", displayName);
            localStorage.setItem("email", email);
            localStorage.setItem("phoneNumber", phoneNumber);
            localStorage.setItem("photoURL", photoURL);
            localStorage.setItem("uid", uid);
            localStorage.setItem("token", token);
            localStorage.setItem("refreshToken", refreshToken);
            localStorage.setItem("id", data.id);
            // window.location.href = "/";
          })
          .catch((error) => {
            // Replace .error() with .catch()
            console.error("Error:", error);
          });
      })
      .catch((error) => {
        // Add .catch() to handle errors in the promise chain
        console.log(error);
      });
  };

  return (
    <button
      className="btn btn-primary w-100"
      type="button"
      onClick={handleGoogleRegister}
    >
      <Icon.Google /> Register with Google
    </button>
  );
};

export default Register;
