import React from "react";
import { useSelector } from "react-redux";
import "./App.css";

const selectDevelopers = (state) => {
  return state.developers.length;
};

const selectResources = (state) => {
  return state.resources.length;
};

function App() {
  const developers = useSelector(selectDevelopers);
  const resources = useSelector(selectResources);
  return (
    <div className="App">
      <h1>Web Development Resources</h1>
      <div className="statistics">
        <div>
          <div className="statistic">
            <strong>{developers}</strong>{" "}
          </div>
          <p className="statistic">developers</p>
        </div>
        <div>
          <div className="statistic">
            <strong>{resources} </strong>
          </div>
          <p className="statistic">resources</p>
        </div>
      </div>
    </div>
  );
}

export default App;
