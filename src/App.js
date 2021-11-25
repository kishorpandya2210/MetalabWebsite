import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Testing from './pages/Testing';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/testing" exact component={() => <Testing />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/quote" exact component={() => <Quote />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
