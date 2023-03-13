import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Filters = () => {
  const { filterAscending, filterDescending } = useContext(UserContext);
  return (
    <div className="sort">
      Sort by age
      <button className="filter_btn" onClick={() => filterAscending()}>
        Age Ascending
      </button>
      <button className="filter_btn" onClick={() => filterDescending()}>
        Age Descending
      </button>
    </div>
  );
};

export default Filters;
