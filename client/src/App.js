import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/frame/header/Header";
import Footer from "./components/frame/Footer";
import Landing from "./components/Landing";
import Search from "./components/search/Search";
import Recipe from "./components/recipe/Recipe";
import CreateRecipe from "./components/createRecipe/CreateRecipe";
import CreateAccount from "./components/auth/CreateAccount";
import LogIn from "./components/auth/LogIn";

const useStyles = makeStyles({
  app: {
    position: "relative",
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
  },
});

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Router>
        <div className={classes.app}>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/recipe" component={Recipe} />
            <Route exact path="/create" component={CreateRecipe} />
            <Route exact path="/createaccount" component={CreateAccount} />
            <Route exact path="/login" component={LogIn} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
