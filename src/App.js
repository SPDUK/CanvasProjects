import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// hoc
import ReactAux from './Hoc/ReactAux/ReactAux';
import Navbar from './Hoc/Navbar/Navbar';
// projects
import Projects from './Projects/Projects';
import Snake from './Projects/Snake/Snake';
import Gravity from './Projects/Gravity/Gravity';
import BouncingBalls from './Projects/BouncingBalls/BouncingBalls';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <ReactAux>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Projects} />
              <Route path="/snake" exact component={Snake} />
              <Route path="/gravity" exact component={Gravity} />
              <Route path="/bouncingballs" exact component={BouncingBalls} />
            </Switch>
          </ReactAux>
        </HashRouter>
      </div>
    );
  }
}

export default App;
