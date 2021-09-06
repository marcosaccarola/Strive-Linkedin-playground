import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from './components/Profile'
import NavbarLinkedin from "./components/NavbarLinkedin";


function App() {
  return (
    <div className="App">
      <header className="" style={{backgroundColor:"lightGrey"}}>
        <Router>
          <Route>
            <NavbarLinkedin />
            <Profile />
          </Route>
        </Router>
      </header>
     </div>
  )
}

export default App;

