import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import PageHeader from "./components/PageHeader";
import Index from "./pages/Index";

function App() {
  return (
    <Router>
      <PageHeader />
      <Route path="/" exact component={Index} />
    </Router>
  );
}

export default App;
