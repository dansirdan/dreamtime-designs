import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Home, About, Contact, NoMatch, Gallery } from "./pages";
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
          {/* CHECKING IF CURRENT PATH IS HOMEPAGE FOR STYLIZED FEEL */}
          {/* NAV route to display the Nav everywhere but the '/' path */}
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
            <Route
              path='/gallery'
              render={props => {
                let pathArr = props.location.pathname.split("/");
                let reqCollection = pathArr[2] || null;

                if (pathArr.length <= 4) {
                  if (reqCollection) {
                    let isCollection = currentCollections.includes(
                      reqCollection
                    );
                    if (isCollection) {
                      return <Gallery {...props} />;
                    } else {
                      return <Redirect to='/gallery' {...props} />;
                    }
                  }
                  return <Gallery {...props} />;
                } else {
                  return <Redirect to='/gallery' {...props} />;
                }
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
