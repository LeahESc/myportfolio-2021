import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Components/Home'
import About from './Components/About'
import Work from './Components/Work'


function App() {
  return (
    <Router> 
      <div className="Portfolio">
    {/* <div className="Portfolio">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div> */}
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    <Route exact path='/work' component={Work} />
    </div>
    </Router>
  );
}

export default App;
