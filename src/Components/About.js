import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../UserContext";

const About = ({ person }) => {
  const { data } = useContext(UserContext);
  return (
    <div className="contacts">
      <span>
        Country: <p> {person?.location.country}</p>
      </span>
      <span>
        State:<p> {person?.location.state}</p>
      </span>
      <span>
        City:<p> {person?.location.city}</p>
      </span>
      <span>
        PostCode:<p> {person?.location.postcode}</p>
      </span>
    </div>
  );
};

export default About;
