import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Header from "./Header";
import FileUploader from "./FileUploader";
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
          <FileUploader />
        </Route>
        <Route exact path="/upload/results">
          <Results />
        </Route>
      </BrowserRouter>
    </div>
  );
};
