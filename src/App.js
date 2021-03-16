import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Work from './Components/Work'
import Navbar from './Components/Navbar';


function App() {
  return (
    <Router> 
      <div className="Portfolio">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/work' component={Work} />
      </div>
    </Router>
  );
}

export default App;
