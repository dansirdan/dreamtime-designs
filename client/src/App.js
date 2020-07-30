import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Gallery, About, Contact, NoMatch } from './pages';
// import Nav from './components/Nav';
import './App.css';

const name = "Roger";
const thoughts = ["React is okay, I guess.", "I want to play Horizon Zero Dawn"];

function JSXVariables() {
  // const name2 = "Karen";
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is ({name})</h1>
          <h2>My name has ({name.length}) letters</h2>
          {
            thoughts.map((thought) => {
             return <h2>{thought}</h2>;
            })
          }
          {/* <h2>I think React ({thoughts})</h2> */}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        {/* <Nav/> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NoMatch} />

        </Switch>
        <JSXVariables></JSXVariables>
      </div>
    </Router>
  );
}

export default App;
