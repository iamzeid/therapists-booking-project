import React from "react";
import { auth } from "./config";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="container mt-5">
      {auth.currentUser ? (
        <div className="card">
          <div className="card-header">
            <h2 className="text-center">Profile</h2>
          </div>
          <img
            src={auth.currentUser.photoURL}
            alt="avatar"
            width="100"
            height="100"
            className="rounded-circle mx-auto d-block mt-3"
          />
          <div className="card-body">
            <p>
              <Icon.Person /> <strong>Name:</strong>{" "}
              {auth.currentUser.displayName}
            </p>
            <p>
              <Icon.Envelope /> <strong>Email:</strong> {auth.currentUser.email}
            </p>
          </div>
          <div className="card-footer">
            <div className="btn-group w-100">
              <Link to="/search" className="btn btn-success">
                Search
              </Link>
              <Link to="/appointments" className="btn btn-success">
                Appointments
              </Link>
              <Link to="/logout" className="btn btn-danger">
                Logout
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2>Profile</h2>
          <p>Please login to view your profile</p>
          <Link to="/login" className="btn btn-success w-100">
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
