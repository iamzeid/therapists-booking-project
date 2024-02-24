import React, { useState, useEffect } from "react";
import { auth, provider } from "./config";
import { signInWithPopup, signOut } from "firebase/auth";
import * as Icon from "react-bootstrap-icons";

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
          <h2>Welcome {value}</h2>
          <p>You are now signed in!</p>

          <h3>Do you want to sign out?</h3>
          <button className="btn btn-danger" onClick={handleSignOut}>
            <Icon.BoxArrowRight /> Sign Out
          </button>
          <button
            className="btn btn-primary"
            onClick={() => (window.location.href = "/")}
          >
            <Icon.ArrowLeft /> Go Back
          </button>
        </div>
      ) : (
        <button
          className="btn btn-primary mt-2 mb-2 w-100"
          onClick={handleClick}
        >
          <Icon.Google /> Sign In With Google
        </button>
      )}
    </>
  );
}

export default Login;
