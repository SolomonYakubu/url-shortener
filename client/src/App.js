import React, { useState } from "react";
import Register from "./components/register/Register";
import Profile from "./components/profile/Profile";
import Error from "./components/errorPage/Error";
import LogIn from "./components/log-in/LogIn";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./components/loader/Loader";
import Home from "./components/home/Home";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const loading = (val) => {
    val ? setIsLoading(true) : setIsLoading(false);
  };
  return (
    <div className="App">
      <Router>
        <Header />
        <div
          style={{
            position: "fixed",
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "60px",
            marginBottom: "60px",

            color: "#000",
          }}
        >
          {isLoading ? <Loader /> : null}
        </div>
        <Switch>
          <Route exact path="/">
            <LogIn loading={loading} />
          </Route>
          <Route path="/Home">
            <Home loading={loading} />
          </Route>
          <Route path="/register">
            <Register loading={loading} />
          </Route>
          <Route path="/dashboard">
            <Dashboard loading={loading} />
          </Route>
          <Route path="/profile">
            <Profile loading={loading} />
          </Route>
          <Route path="/*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
