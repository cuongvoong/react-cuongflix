import React from "react";
import "./Error.css";

const Error = () => {
  return (
    <div className="mainView">
      <div className="error">
        <span className="error-header">404</span>
        <div className="error-text">
          The page you are looking for was not found.
        </div>
        <a href="/" className="btn btn-link">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Error;
