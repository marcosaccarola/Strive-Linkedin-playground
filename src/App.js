import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfilePage from "./components/pages/ProfilePage";
import HomePage from "./components/pages/HomePage";
import { useState } from "react";
import { searchProfile } from "./utils/profiles";
import { useEffect } from "react";

function App() {
  // const [stateApp, setStateApp] = useState
  // const [data, setData] = useState
  // const fetchData = async () => {
  //   const thatData = await searchProfile()
  //   setData(thatData)
  // }
  // useEffect (() => {
  //   fetchData()
  // }, [])

  return (
    <div className="App">
      <Router>
        <Route
          path="/profilePage"
          exact
          render={(routerProps) => (
            <ProfilePage {...routerProps} subTitle="ProfilePage" />
          )}
        />
        <Route
          path="/"
          exact
          render={(routerProps) => (
            <HomePage {...routerProps} subTitle="HomePage" />
          )}
        />
      </Router>
    </div>
  );
}

export default App;
