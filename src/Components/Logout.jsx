import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./config";

import { useNavigate, Link } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    // <div className="container text-center mt-5">
    //   <h1>Logout</h1>
    //   <p>
    //     You are about to logout. Are you sure you want to logout from the
    //     application?
    //   </p>
    //   <button className="btn btn-danger w-100" onClick={handleLogout}>
    //     Yes, Logout
    //   </button>
    //   <Link className="btn btn-success w-100 mt-3" to="/">
    //     No, Go back to Home
    //   </Link>
    // </div>

    // If user is not logged in, redirect to home page
    // If user is logged in, show logout button
    <div>
      {auth.currentUser ? (
        <div className="container text-center mt-5">
          <h1>Logout</h1>
          <p>
            You are about to logout. Are you sure you want to logout from the
            application?
          </p>
          <button className="btn btn-danger w-100" onClick={handleLogout}>
            Yes, Logout
          </button>
          <Link className="btn btn-success w-100" to="/">
            No, Go back to Home
          </Link>
        </div>
      ) : (
        <div className="container text-center mt-5">
          <h1>You are not logged in</h1>
          <p>Please login to access this page</p>
          <Link className="btn btn-success w-100" to="/login">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Logout;
