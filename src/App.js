import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Work from './Components/Work'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'

function App() {
  return (
    <div className="portfolio-container">
      <div className="content-wrap">
    <Router> 
        <Navbar/>
        <ScrollToTop/>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/work' component={Work} />
        
    </Router>
     </div>
    
     <Footer/>
      
    </div>
  );
}

export default App;
