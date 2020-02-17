import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import IndexPage from "./beranda/beranda";
import Profil from "./profile/profilePage";
import AddPet from "./profile/addPetPage";
import EditPage from "./profile/editPage";
import Home from "./home/home";

import "./App.css";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/index">
            <IndexPage />
          </Route>
          <Route path="/profil">
            <Profil />
          </Route>
          <Route path="/add-pet">
            <AddPet />
          </Route>
          <Route path="/edit-profile">
            <EditPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
