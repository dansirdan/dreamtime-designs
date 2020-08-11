import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  Gallery,
  About,
  Contact,
  NoMatch,
  Collection,
  Detail,
} from "./pages";
import { CssBaseline } from "@material-ui/core";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/gallery' component={Gallery} />
            <Route
              exact
              path={[
                "/gallery/watercolor",
                "/gallery/pastels",
                "/gallery/portraits",
                "/gallery/cards",
                "/gallery/other",
              ]}
              render={({ location }) => {
                let pathArr = location.pathname.split("/");
                return <Collection collection={pathArr[2]} />;
              }}
            />
            <Route
              exact
              path={[
                "/gallery/watercolor/:id",
                "/gallery/pastel/:id",
                "/gallery/portraits/:id",
                "/gallery/cards/:id",
                "/gallery/other/:id",
              ]}
              render={({ location }) => {
                let pathArr = location.pathname.split("/");
                return <Detail collection={pathArr[2]} id={pathArr[3]} />;
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
