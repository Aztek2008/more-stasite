import React, { Component } from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import history from "history/browser";

import Layout from "../Layout";
import Sidebar from "../Sidebar";
import NorwayPage from "../../pages/NorwayPage";
import TurkeyPage from "../../pages/TurkeyPage";
import MontenegroPage from "../../pages/MontenegroPage";
import AuthContext from "../../contexts/Auth.js";

import style from "./App.module.css";
import "./App.CSSTransition.css";

export default class App extends Component {
  state = {
    locations: ["Norway", "Turkey", "Montenegro"], //TODO: TO FIX LOCATION CHOOSE METHOD
    index: 0,
    openSidebar: false,
  };

  componentDidMount() {
    const storedIndex = localStorage.getItem("index");
    const storedSidebarState = JSON.parse(localStorage.getItem("openSidebar"));
    const currentIndex = this.state.locations.indexOf(storedIndex);

    this.setState({
      openSidebar: storedSidebarState || false,
      index: currentIndex === -1 ? 0 : storedIndex,
    });
  }

  currentLocation = () => {
    const { locations, index } = this.state;
    return locations[index];
  };

  increaseIndex = async () => {
    await localStorage.removeItem("index");
    const maxIndex = this.state.locations.length - 1;
    const { index } = this.state;

    // CHANGING INDEX RELATING TO CURRENT INDEX IN STATE, USING IN PAGE SWITCHING(NAVIGATION) ARROW
    index < maxIndex
      ? this.setState((prevState) => ({
          index: prevState.index + 1,
        }))
      : this.setState({
          index: 0,
        });

    localStorage.setItem("index", index);
  };

  decreaseIndex = async () => {
    await localStorage.removeItem("index");
    const maxIndex = this.state.locations.length - 1;
    const { index } = this.state;

    index > 0
      ? this.setState((prevState) => ({
          index: prevState.index - 1,
        }))
      : this.setState({
          index: maxIndex,
        });

    localStorage.setItem("index", index);
  };

  initOpenSideMenu = async () => {
    await this.setState({ openSidebar: true });

    localStorage.setItem("openSidebar", this.state.openSidebar);
  };

  initCloseSideMenu = () => {
    this.setState({ openSidebar: false });

    history.back();
    history.back(); // ONE IS NOT ENOUGH

    localStorage.removeItem("openSidebar");
  };

  render() {
    const calculatedLocation = this.currentLocation();
    const calculatedPath = `/${calculatedLocation}Page`;
    const { openSidebar } = this.state;

    return (
      <AuthContext>
        <Layout>
          <CSSTransition
            in={openSidebar}
            classNames="fade"
            timeout={250}
            unmountOnExit
          >
            <Sidebar
              props={calculatedPath}
              closeSideMenu={this.initCloseSideMenu}
            />
          </CSSTransition>

          <div className={style.buttonContainer}>
            <NavLink to={calculatedPath} onClick={() => this.decreaseIndex()}>
              <i className="fas fa-long-arrow-alt-left fa-light fa-3x"></i>
            </NavLink>
            <NavLink to={calculatedPath} onClick={() => this.increaseIndex()}>
              <i className="fas fa-long-arrow-alt-right fa-light fa-3x"></i>
            </NavLink>
          </div>
          <Switch>
            <Route exact path="/">
              <Redirect to="/TurkeyPage" />
            </Route>
            <Route
              path="/TurkeyPage"
              render={(props) => (
                <TurkeyPage {...props} openSideMenu={this.initOpenSideMenu} />
              )}
            />
            <Route
              path="/NorwayPage"
              render={(props) => (
                <NorwayPage {...props} openSideMenu={this.initOpenSideMenu} />
              )}
            />

            <Route
              path="/MontenegroPage"
              render={(props) => (
                <MontenegroPage
                  {...props}
                  openSideMenu={this.initOpenSideMenu}
                />
              )}
            />
          </Switch>
        </Layout>
      </AuthContext>
    );
  }
}
