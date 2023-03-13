import React from "react";

const Contacts = ({ person }) => {
  return (
    <div className="contacts">
      <span>
        Mail: <p> {person?.email}</p>
      </span>
      <span>
        Phone: <p> {person?.phone}</p>
      </span>
    </div>
  );
};

export default Contacts;
