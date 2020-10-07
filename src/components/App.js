import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Upload from "./Upload";
import Results from "./Results";

export default () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/upload">
          <Upload />
        </Route>
        <Route exact path="/upload/results">
          <Results />
        </Route>
      </BrowserRouter>
    </div>
  );
};
