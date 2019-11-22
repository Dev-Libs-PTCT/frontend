import React, { useState } from "react";

import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import DevLibList from "./components/DevLibList";
import DevLibForm from "./components/DevLibForm";
import CreateDevLib from "./components/CreateDevLib";


import { CategoriesContext } from "./hooks/CategoriesContext";
import { WordsContext } from "./hooks/WordsContext";
import { DevLibContext } from "./hooks/DevLibContext";


function App(props) {
  const [devLibs, setDevlibs] = useState([]);
  const [categories, setCategories] = useState();
  const [words, setWords] = useState({
    noun1: "",
    noun2: "",
    noun3: "",
    noun4: "",
    noun5: "",
    proNoun1: "",
    proNoun2: "",
    verb1: "",
    verb2: "",
    adverb: "",
    adjective: ""
  });

  const ChangeCategories = value => {
    setCategories(value);
    console.log("change categories", value);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <DevLibContext.Provider value={{ devLibs, setDevlibs }}>
            <WordsContext.Provider value={{ words, setWords }}>
              <CategoriesContext.Provider
                value={{ categories, setCategories, ChangeCategories }}
              >
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/profile"  component={Profile} />
                <Route path="/devlibs" component={DevLibList} />
                <Route
                  path="/form"
                  render={props => <DevLibForm {...props} />}
                />
                <Route
                  path="/create"
                  render={props => <CreateDevLib {...props} />}
                />
              </CategoriesContext.Provider>
            </WordsContext.Provider>
          </DevLibContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
