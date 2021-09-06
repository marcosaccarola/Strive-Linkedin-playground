import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './components/Profile'


function App() {
  return (
    <div className="App">
      <header className="" style={{backgroundColor:"lightGrey"}}>
        <Router>
          <Route>
            <Profile />
          </Route>
        </Router>
      </header>
    </div>
  );
}

export default App;

