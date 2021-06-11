import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Hero from "./components/Home/Hero/Hero.js";
import Content from "./components/Home/content/Content.js";
import Footer from "./components/Footer/Footer.js";
import HeroFeatures from "./components/Features/Hero/HeroFeatures";
import Commands from "./components/Commands/Commands";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Hero />
            <Content />
          </Route>
          <Route path="/features" exact>
            <HeroFeatures />
          </Route>
          <Route path="/commands" exact>
            <Commands />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
