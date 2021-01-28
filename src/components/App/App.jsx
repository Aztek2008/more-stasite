import React, { Component } from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import history from "history/browser";

import Layout from "../Layout";
import Sidebar from "../Sidebar";
import NorwayPage from "../../pages/NorwayPage";
import TurkeyPage from "../../pages/TurkeyPage";
import MontenegroPage from "../../pages/MontenegroPage";

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
    const storedSidebarState = localStorage.getItem("openSidebar");
    const currentIndex = this.state.locations.indexOf(storedIndex);

    this.setState({
      openSidebar: storedSidebarState || false,
      index: currentIndex === -1 ? 0 : storedIndex,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // localStorage.setItem("openSidebar", this.state.openSidebar);
  }

  currentLocation = () => {
    const { locations, index } = this.state;
    return locations[index];
  };

  increaseIndex = async () => {
    await localStorage.removeItem("index");
    const maxIndex = this.state.locations.length - 1;
    const { index } = this.state;

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

  initOpenSideMenu = () => {
    this.setState({ openSidebar: true });

    localStorage.setItem("openSidebar", this.state.openSidebar);
  };

  initCloseSideMenu = () => {
    this.setState({ openSidebar: false });

    history.back();

    localStorage.removeItem("openSidebar");
  };

  render() {
    const calculatedLocation = this.currentLocation();
    const calculatedPath = `/${calculatedLocation}Page`;
    const { openSidebar } = this.state;

    return (
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
        {/* <CSSTransition
          in={true}
          appear={true}
          classNames="page"
          timeout={300}
          unmountOnExit
        > */}
        <Switch>
          <Route exact path="/">
            <Redirect to="/TurkeyPage" />
          </Route>
          <Route
            exaxt
            path="/TurkeyPage"
            render={(props) => (
              <TurkeyPage {...props} openSideMenu={this.initOpenSideMenu} />
            )}
          />
          <Route
            exaxt
            path="/NorwayPage"
            render={(props) => (
              <NorwayPage {...props} openSideMenu={this.initOpenSideMenu} />
            )}
          />

          <Route
            exaxt
            path="/MontenegroPage"
            render={(props) => (
              <MontenegroPage {...props} openSideMenu={this.initOpenSideMenu} />
            )}
          />
          {/* <Route exaxt path="/MontenegroPage" component={MontenegroPage} /> */}
        </Switch>
        {/* </CSSTransition> */}
      </Layout>
    );
  }
}
