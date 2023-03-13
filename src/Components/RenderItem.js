import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const RenderItem = ({ item }) => {
  return (
    <>
      <div className="user">
        <img src={item?.picture.large} alt="pic" />
        <p>{item?.name.first + " " + item.name.last}</p>
        <Link to={`person/${item?.id.value}`}>
          <button>View Profile</button>
        </Link>
      </div>
    </>
  );
};

export default RenderItem;
