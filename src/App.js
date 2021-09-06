import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomFooter from './components/CustomFooter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <CustomFooter />
        </Router>
      </header>
    </div>
  );
}

export default App;
