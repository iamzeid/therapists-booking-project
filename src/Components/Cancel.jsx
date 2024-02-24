import React from "react";
import { XCircleFill } from "react-bootstrap-icons";

function Cancel(props) {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-body">
              <XCircleFill size={100} className="text-danger mb-3" />
              <h2 className="card-title text-danger">Payment Cancelled!</h2>
              <p className="card-text mb-4">Your payment was not successful.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cancel;
