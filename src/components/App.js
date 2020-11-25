import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MissionList from "./MissionList";

const App = () => {
  return (
    <div>
      <MissionList />
    </div>
  );
};

export default App;
