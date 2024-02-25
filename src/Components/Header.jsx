import React, { useEffect, useState } from "react";
import { Hospital } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { auth } from "./config";

export default function Header() {
  return (
    // TODO: Replace hrefs with routing Links
    // TODO: If user is not logged in, show login and register buttons
    <header className="p-3 mb-3 border-bottom bg-success bg-opacity-75">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
          <a
            href="/"
            className="d-flex align-items-center mb-lg-0 link-light text-decoration-none"
          >
            <Hospital className="me-2" size={32} />
            <Link to="/" className="text-white text-decoration-none">
              <span className="h4 me-2">Therapist Finder</span>
            </Link>
          </a>

          {auth.currentUser ? (
            <div className="dropdown text-end">
              <a
                href="#"
                className="d-block link-light text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={auth.currentUser.photoURL}
                  alt="avatar"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small dropdown-menu-end">
                <li>
                  <Link to="/profile" className="dropdown-item">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/search" className="dropdown-item">
                    Search
                  </Link>
                </li>
                <li>
                  <Link to="/appointments" className="dropdown-item">
                    Appointments
                  </Link>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <Link to="/logout" className="dropdown-item">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <ul>
              <>
                <Link to="/login" className="btn btn-outline-light me-2">
                  Login
                </Link>

                <Link to="/register" className="btn btn-outline-light">
                  Sign-up
                </Link>
              </>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
