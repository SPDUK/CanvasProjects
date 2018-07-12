import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactAux from './Hoc/ReactAux/ReactAux';
import Navbar from './Hoc/Navbar/Navbar';
import Projects from './Projects/Projects';
import Snake from './Projects/Snake/Snake';
import Gravity from './Projects/Gravity/Gravity';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <ReactAux>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Projects} />
              <Route path="/snake" exact component={Snake} />
              <Route path="/gravity" exact component={Gravity} />
            </Switch>
          </ReactAux>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
