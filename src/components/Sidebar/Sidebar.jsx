import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import withAuthContext from "../hoc/withAuthContext.js";

import Button from "../Buttons";
import LoginPage from "../../pages/LoginPage";
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

class Sidebar extends Component {
  state = {
    mustLogin: false,
  };

  toggleLoginForm = () => {
    this.setState({ mustLogin: !this.state.mustLogin });

    // CHECK IF APP STATE HAS SAME SHOULDLOGIN STATE AS MUSTLOGIN BEFORE TOGGLE
    this.props.auth.shouldLogin !== this.state.mustLogin
      ? (this.props.auth.shouldLogin = this.state.mustLogin)
      : (this.props.auth.shouldLogin = !this.state.mustLogin);
  };

  render() {
    const { user, login, logout, shouldLogin } = this.props.auth;

    return (
      <>
        <SidebarParent>
          <MenuBar className={styles.flagContainer}>
            <button
              onClick={() => this.props.closeSideMenu()}
              className={styles.goBackButton}
              type="button"
            >
              <i className="fas fa-arrow-left fa-dark fa-2x"></i>
            </button>
            {user && (
              <>
                <h2>Hi, {user.name}</h2>
                <button
                  className={styles.logoutButton}
                  onClick={() => logout()}
                >
                  <span>Log out</span>
                </button>
              </>
            )}

            <h2>Take Trip To Explore</h2>
            <p>Explore</p>
            {!user && (
              <Button toggleLogin={this.toggleLoginForm}>
                <span className={styles.button}>Proceed to login</span>
              </Button>
            )}
            {/* ======================== LOGIN PAGE ========================== */}
            <CSSTransition
              in={shouldLogin}
              classNames="fade"
              timeout={300}
              unmountOnExit
            >
              <LoginPage login={login} logout={logout} />
            </CSSTransition>
            {/* ======================== LOGIN PAGE ========================== */}

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

export default withAuthContext(Sidebar);

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
