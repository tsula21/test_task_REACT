import React, { useContext, useState } from "react";
import Filters from "../Components/Filters";
import RenderItem from "../Components/RenderItem";
import { UserContext } from "../UserContext";

const Home = () => {
  const { data, hide, setHide } = useContext(UserContext);

  return (
    <>
      <h1>Staff List</h1>

      <div className="btn_container">
        <button className="btn" onClick={() => setHide(!hide)}>
          Friends
        </button>
      </div>

      <div className="users_container">
        <Filters />
        {hide ? (
          <div className="users">
            {data ? (
              data.map((item, i) => {
                return <RenderItem item={item} key={i} />;
              })
            ) : (
              <p className="loading">Loading</p>
            )}
          </div>
        ) : (
          <div className="hidden">Click "Friends" Button to see list</div>
        )}
      </div>
    </>
  );
};

export default Home;
