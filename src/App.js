import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarLinkedin from "./components/NavbarLinkedin";

function App() {
  return (
    <div>
      <NavbarLinkedin />
    </div>
  );
}

export default App;
