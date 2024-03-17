import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FlagsPlace from "./components/FlagsPlace";
import data from "./data.json";
import FlagPage from "./components/FlagPage";

const App = () => {
  const [flagData, setFlagData] = useState(data);
  const [mode, setMode] = useState(true);

  useEffect(() => {
    if (mode) {
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
    } else if (!mode) {
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
    }
  }, [mode]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header mode={mode} setMode={setMode} />
              <FlagsPlace data={flagData} mode={mode} />
            </div>
          }
        />
        <Route
          path="/flag/:flagId"
          element={
            <div>
              <Header mode={mode} setMode={setMode} />
              <FlagPage data={flagData} mode={mode} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
