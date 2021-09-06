import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavbarLinkedin from "./components/NavbarLinkedin";
import Profile from "./components/Profile";
import CustomFooter from "./components/CustomFooter";

function App() {
  return (
    <div className="App">
      <header className="" style={{ backgroundColor: "lightGrey" }}>
        <Router>
          <Route>
            <NavbarLinkedin />

            <Profile />

            <CustomFooter />
          </Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
