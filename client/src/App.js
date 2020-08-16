import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About, Contact, NoMatch } from "./pages";
import Gallery from "./pages/Gallery";
import GalleryNew from "./pages/GalleryNew";
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
            render={({ location }) => {
              return location.pathname === "/" ? null : <Nav />;
            }}
          />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/gallery' component={GalleryNew} />
            {/* <Route
              exact
              path={[
                "/gallery",
                "/gallery/watercolor",
                "/gallery/pastels",
                "/gallery/portraits",
                "/gallery/cards",
                "/gallery/other",
                "/gallery/watercolor/:id",
                "/gallery/pastels/:id",
                "/gallery/portraits/:id",
                "/gallery/cards/:id",
                "/gallery/other/:id",
              ]}
              render={({ location }) => {
                let pathArr = location.pathname.split("/");
                let requestObj = {
                  detail: pathArr[3] || null,
                  collection: pathArr[2] || null,
                  page: pathArr[3]
                    ? "detail"
                    : null || pathArr[2]
                    ? "collection"
                    : null || pathArr[1],
                };
                return (
                    <Gallery pathArr={pathArr} request={requestObj} />
                );
              }}
            /> */}
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
