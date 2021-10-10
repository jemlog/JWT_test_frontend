import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./component/Login";
import Main from "./component/Main";
const App = () => {
  return (
    <Router>
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Main} />
    </Router>
  );
};

export default App;
