import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer className="bg-body-tertiary text-success p-3 pt-5">
      <div className="container">

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p className="text-center text-sm-start">
            &copy; {new Date().getFullYear()} Company, Inc. All rights reserved.
          </p>
          <ul className="list-unstyled d-flex gap-2 justify-content-center justify-content-sm-start">
            <li className="ms-3">
              <a className="link-primary" href="#">
                <Facebook size={32} />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-info" href="#">
                <Twitter size={32} />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-primary" href="#">
                <Linkedin size={32} />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-danger" href="#">
                <Youtube size={32} />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-danger" href="#">
                <Instagram size={32} />
              </a>
            </li>
          </ul>
        </div>
        
      </div>
    </footer>
  );
}
