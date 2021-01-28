import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import { CSSTransition } from "react-transition-group";
import history from "history/browser";

import Button from "../Buttons";
// import LoginPage from "../../pages/LoginPage";
import ExplorePage from "../../pages/ExplorePage";
import ExpensesPage from "../../pages/ExpensesPage";
import GetReadyPage from "../../pages/GetReadyPage";

import styled from "styled-components";
import styles from "./Sidebar.module.css";
import "./Sidebar.CSSTransition.css";

const SidebarParent = styled.div`
  position: absolute;
  display: flex;
  background: rgba(250, 249, 249, 0.5);
  width: 100%;
  height: 100vh;
  /* PREVENTS CLICKING ON UNDERNEATH LAYER */
  z-index: 1;
`;

const MenuBar = styled.div`
  background: #faf9f9;
  width: 300px;
  height: 100vh;
`;

const Arrow = styled.div`
  color: #323232;
`;

export default class Sidebar extends Component {
  closeSidebar = () => {
    this.props.closeSideMenu();

    history.back();
  };

  render() {
    // const originPath = this.props.props;

    return (
      <>
        <SidebarParent>
          <MenuBar className={styles.flagContainer}>
            <button
              onClick={this.closeSidebar}
              className={styles.goBackButton}
              type="button"
            >
              <i className="fas fa-arrow-left fa-dark fa-2x"></i>
            </button>
            <h2>Take Trip To Explore</h2>
            <p>Explore</p>
            <Button>
              <span className={styles.button}>Proceed to activation</span>
            </Button>
            <p>Scroll to see more</p>
            <Arrow>
              <i className="fas fa-long-arrow-alt-down fa-dark fa-2x"></i>
            </Arrow>
          </MenuBar>
          <div>
            <Switch>
              {/* ================= NORWAY PAGE ================ */}
              <Route
                exact
                // path={`${originPath}/ExplorePage`}
                path={`/NorwayPage/ExplorePage`}
                component={ExplorePage}
              />
              <Route
                exact
                path={`/NorwayPage/ExpensesPage`}
                component={ExpensesPage}
              />
              <Route
                exact
                path={`/NorwayPage/GetReadyPage`}
                component={GetReadyPage}
              />
              {/* ================= TURKEY PAGE ================== */}
              <Route
                exact
                path={`/TurkeyPage/ExplorePage`}
                component={ExplorePage}
              />
              <Route
                exact
                path={`/TurkeyPage/ExpensesPage`}
                // path={`${originPath}/ExpensesPage`}
                component={ExpensesPage}
              />
              <Route
                exact
                path={`/TurkeyPage/GetReadyPage`}
                component={GetReadyPage}
              />
              {/* ================= MONTENEGRO PAGE ================== */}
              <Route
                exact
                path={`/MontenegroPage/ExplorePage`}
                component={ExplorePage}
              />
              <Route
                exact
                path={`/MontenegroPage/ExpensesPage`}
                component={ExpensesPage}
              />
              <Route
                exact
                path={`/MontenegroPage/GetReadyPage`}
                component={GetReadyPage}
              />
            </Switch>
          </div>
        </SidebarParent>
      </>
    );
  }
}

/**
 * SIDEMENU contains
 * MainNavigation,
 * login,
 * reqister,
 * EXPLORE description, which opens gallery (if EXPLORE page rendered)
 * after clicking EXPLORE link at bottom navbar
 * page starts with animation of trip route line around shore siluet to show actual route of choosen trip
 * after animation complete, you can choose from leftside menu
 * show gallery, show sights or places
 * which will expand to whole window after click
 */
