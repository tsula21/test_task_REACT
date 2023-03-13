import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./UserContext";
import "./Styles/App.css";
import Home from "./Pages/Home";
import SinglePage from "./Pages/SinglePage";
import NotFound from "./Pages/NotFound";

function App() {
  /* A hook that is used to store data in the state. */
  const [data, setData] = useState([]);
  /* A hook that is used to hide and show list */
  const [hide, setHide] = useState(true);
  /* A hook that is used to select personal information tabs. */
  const [single, setSingle] = useState(3);

  /* Fetching data from the API using Axios. */
  const FetchData = () => {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((res) => {
        setData(res.data.results);
        // console.log(res, "res");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   * We're creating a new array called ageAscending, which is a copy of the data array, and then we're
   * sorting it by the age Ascending and Descending
   */
  const filterAscending = () => {
    const ageAscending = [...data].sort((a, b) => a.dob.age - b.dob.age);
    setData(ageAscending);
  };

  const filterDescending = () => {
    const ageDescending = [...data].sort((a, b) => b.dob.age - a.dob.age);
    setData(ageDescending);
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <UserContext.Provider
          value={{
            data,
            setData,
            hide,
            setHide,
            single,
            setSingle,
            filterAscending,
            filterDescending,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="person/:friendId" element={<SinglePage />} />
            <Route
              path="person/null"
              element={<NotFound setSingle={setSingle} />}
            />
          </Routes>
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;
