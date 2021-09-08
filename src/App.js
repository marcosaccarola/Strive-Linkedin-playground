import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfilePage from "./components/pages/ProfilePage";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <div className="App">
      <header>
        <Router>

          <Route exact path="/profilePage" component={ProfilePage} />

          <Route exact path="/" component={HomePage} />
        </Router>
      </header>
    </div>
  );
}

export default App;
