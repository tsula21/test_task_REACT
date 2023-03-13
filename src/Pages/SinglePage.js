import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import About from "../Components/About";
import Contacts from "../Components/Contacts";
import Messages from "../Components/Messages";
import cube from "../assets/cube.svg";

const SinglePage = () => {
  const { friendId } = useParams();
  const { data, single, setSingle } = useContext(UserContext);

  const person = data.find((item) => item.id.value == friendId);

  if (friendId == null) {
    return <p>null, not found</p>;
  }

  return (
    <>
      <div className="single">
        <div className="hr"></div>
        <div className="hr"></div>

        <div className="single_content">
          <div className="left">
            <img src={person.picture.large} alt="" />
          </div>
          <div className="right">
            <h3>{person.name.first + " " + person.name.last}</h3>
            <ul>
              <li
                onClick={() => setSingle(1)}
                className={`${single == 1 && "liActive"}`}
              >
                <img src={cube} alt="icon" /> Messages
              </li>
              <li
                onClick={() => setSingle(2)}
                className={`${single == 2 && "liActive"}`}
              >
                Contacts
              </li>
              <li
                onClick={() => setSingle(3)}
                className={`${single == 3 && "liActive"}`}
              >
                About Me
              </li>
            </ul>
            <div className="info">
              {single == 1 && <Messages />}
              {single == 2 && <Contacts person={person} />}
              {single == 3 && <About person={person} />}
            </div>
          </div>
        </div>

        <Link to="/" onClick={() => setSingle(3)}>
          Back To Home
        </Link>
      </div>
    </>
  );
};

export default SinglePage;
