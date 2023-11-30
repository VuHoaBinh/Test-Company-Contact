import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LandingPage from "./pages/LandingPage";
import EditPage from "./pages/EditPage";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__container">
          <Sidebar />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/edit/:id" component={EditPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
