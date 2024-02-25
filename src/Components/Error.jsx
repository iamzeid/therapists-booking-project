import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="container">
      <h1 className="text-center mt-5">404 Not Found</h1>
      <p className="text-center mb-5">
        Sorry, the page you are looking for does not exist.
      </p>
      <div className="text-center">
        <Link to="/" className="btn btn-success w-100">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
