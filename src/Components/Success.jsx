import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircleFill } from "react-bootstrap-icons";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/search");
    }, 5000);

    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-body">
              <CheckCircleFill size={100} className="text-success mb-3" />
              <h2 className="card-title text-success">Payment Successful!</h2>
              <p className="card-text">
                Thank you for booking your doctor appointment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
