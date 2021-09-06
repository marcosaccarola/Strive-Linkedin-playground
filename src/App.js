import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavbarLinkedin from "./components/NavbarLinkedin";
import Directory from './components/Directory';
import CustomFooter from './components/CustomFooter';
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <header>
        <Router>
          <Route>
            <NavbarLinkedin />

            <Profile />

            <Directory />
            <CustomFooter />
          </Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
