import React, { useEffect, useState } from "react";
import { Hospital } from "react-bootstrap-icons";

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/users?email=" + localStorage.getItem("email"))
      .then((response) => response.json())
      .then((data) => {
        setUser(data[0]);
      });
  }, []);

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
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 link-light">
                Overview
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-light">
                Inventory
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-light">
                Customers
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-light">
                Products
              </a>
            </li>
          </ul>

          {user ? (
            <div className="dropdown text-end">
              <a
                href="#"
                className="d-block link-light text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={user.photoURL}
                  alt="avatar"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <button className="btn btn-light">Login / Signin</button>
          )}
        </div>
      </div>
    </header>
  );
}
