import React from "react";

export default function Home() {
  return (
    // Landing page
    <div className="container">
      <h1 className="text-center">Welcome to Therapize</h1>
      <p>
        Therapize is a platform that connects you with the best therapists in
        your area. We offer a wide range of therapists with different
        specialties and price ranges. We also offer a variety of services such
        as in-person therapy sessions, virtual therapy sessions, and group
        therapy sessions. We are here to help you find the best therapist for
        your needs.
      </p>

      <div className="row">
        <div className="col bg-body-tertiary p-3 m-3 rounded-2">
          <h2 className="text-center">Find a Therapist</h2>
          <p className="text-center">
            Find the best therapist for your needs. We offer a wide range of
            therapists with different specialties and price ranges.
          </p>

          <div className="text-center">
            <button className="btn btn-primary">Find a Therapist</button>
          </div>
        </div>
      </div>
    </div>
  );
}
