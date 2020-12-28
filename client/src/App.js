import React, { useState } from "react";
import Register from "./components/register/Register";
import LogIn from "./components/log-in/LogIn";
import Dashboard from "./components/dashboard/Dashboard";
import CreatePoll from "./components/create-poll/CreatePoll";
import Vote from "./components/vote/Vote";
import Header from "./components/header/Header";
import { HashRouter as Router, Route } from "react-router-dom";
import Loader from "./components/loader/Loader";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const loading = (val) => {
    val ? setIsLoading(true) : setIsLoading(false);
  };
  return (
    <div className="App">
      <Header />
      <div style={{ position: "fixed", left: "50%", marginTop: "50px" }}>
        {isLoading ? <Loader /> : null}
      </div>
      <Router>
        <Route exact path="/">
          <LogIn loading={loading} />
        </Route>
        <Route path="/register">
          <Register loading={loading} />
        </Route>
        <Route path="/poll">
          <Dashboard loading={loading} />
        </Route>
        <Route path="/create-poll">
          <CreatePoll />
        </Route>
        <Route path="/vote">
          <Vote />
        </Route>
      </Router>
    </div>
  );
}

export default App;
