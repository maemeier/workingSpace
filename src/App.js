import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./page/homepage";
import Places from "./page/places";
import SinglePlace from "./page/singlePlace";
import AboutMe from "./page/aboutMe";
import NotFound from "./page/notFound";

import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/aboutus" component={AboutMe} />
        <Route exact path="/places" component={Places} />
        <Route exact path="/places/:slug" component={SinglePlace} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
