import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Home, About, Contact, NoMatch } from "./pages";
import TestGallery from "./pages/TestGallery";
// import Gallery from "./pages/Gallery";
import { CssBaseline } from "@material-ui/core";
import Nav from "./components/Nav";
import "./App.css";

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
            render={(props) => {
              return props.location.pathname === "/" ? null : <Nav {...props}/>;
            }}
          />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              path='/gallery'
              render={props => {
                let pathArr = props.location.pathname.split("/");
                return pathArr.length > 4 ? (
                  <Redirect to='/gallery' {...props} />
                ) : (
                  <TestGallery {...props} />
                );
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
