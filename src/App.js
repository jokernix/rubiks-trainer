import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import F2l from './components/F2l/F2l';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/f2l">
            <F2l />
          </Route>
          <Route exact path="/">
            <Redirect to="/f2l" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
