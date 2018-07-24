import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// hoc
import ReactAux from './Hoc/ReactAux/ReactAux';
// landing
import FakeLoading from './FakeLoading/FakeLoading';
// projects
import Projects from './Projects/Projects';
import Snake from './Projects/Snake/Snake';
import Gravity from './Projects/Gravity/Gravity';
import BouncingBalls from './Projects/BouncingBalls/BouncingBalls';
import VisualizedSort from './Projects/VisualizedSort/VisualizedSort';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <ReactAux>
            <Switch>
              <Route path="/" exact component={FakeLoading} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/snake" exact component={Snake} />
              <Route path="/gravity" exact component={Gravity} />
              <Route path="/bouncingballs" exact component={BouncingBalls} />
              <Route path="/visualizedsort" exact component={VisualizedSort} />
            </Switch>
          </ReactAux>
        </HashRouter>
      </div>
    );
  }
}

export default App;
