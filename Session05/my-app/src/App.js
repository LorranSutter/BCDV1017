import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Navigation from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Student from './Components/Student';
import Error from './Components/Error';
import Redirect from './Components/Redirect';
import customHistory from './Components/History';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter history={customHistory}>
        <Navigation></Navigation>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/student/:studentName/:studentNo?" component={Student} />
          <Route path="/redirect" component={Redirect} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;