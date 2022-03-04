import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
