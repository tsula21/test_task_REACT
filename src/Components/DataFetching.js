import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>DataFetching</div>;
};

export default DataFetching;
