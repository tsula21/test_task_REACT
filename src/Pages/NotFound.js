import React from "react";
import { Link } from "react-router-dom";

const NotFound = ({ setSingle }) => {
  return (
    <div className="error">
      Error, Item not found. Go back and Try later
      <Link to="/" onClick={() => setSingle(3)}>
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
