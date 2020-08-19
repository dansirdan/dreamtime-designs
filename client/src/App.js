import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Home, About, Contact, NoMatch, Main, Gallery } from "./pages";
import { CssBaseline } from "@material-ui/core";
import Nav from "./components/Nav";
import "./App.css";

// Array of art mediums, so that artist may add more in the future
const currentCollections = [
  "cards",
  "watercolor",
  "pastels",
  "portraits",
  "other",
];

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <div>
            <Route
              path='/'
              render={props => {
                return props.location.pathname === "/" ? null : (
                  <Nav {...props} />
                );
              }}
            />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/gallery' component={Main} />
            <Route
              exact
              path='/gallery/:collectionParam'
              render={props => {
                let isCollection = currentCollections.includes(
                  props.match.params.collectionParam
                );
                if (isCollection) {
                  return <Gallery {...props} />;
                }
                return <Redirect to='/gallery' {...props} />;
              }}
            />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
