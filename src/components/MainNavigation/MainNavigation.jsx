import React from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import withAuthContext from "../hoc/withAuthContext.js";
// import history from "history/browser";

import styles from "./MainNavigation.module.css";

function MainNavigation({ auth, props }) {
  const { path } = props.match;

  return (
    <Router>
      <div className={styles.Container}>
        <div className={styles.flagContainer}>
          <p className={styles.flag}>Discover the location</p>
        </div>
        <div className={styles.flagContainer}>
          <i className="fas fa-long-arrow-alt-down fa-light fa-3x"></i>
        </div>

        <nav className={styles.ContainerNav}>
          <NavLink
            onClick={() => {
              props.openSideMenu();
              // auth.openSideMenu();
              props.history.push({ pathname: `${path}/ExplorePage` });
              // history.push({ pathname: `${history.location}/ExplorePage` }); // WITH THIS METHOD HISTORY PUSH WORKS BUT PAGE CONTENT DOESN'T RENDER
            }}
            className={styles.navLink}
            exact
            to={`${path}/ExplorePage`}
          >
            explore
          </NavLink>

          <NavLink
            onClick={() => {
              props.openSideMenu();
              // auth.openSideMenu();
              props.history.push({ pathname: `${path}/ExpensesPage` });
            }}
            className={styles.navLink}
            exact
            to={`${path}/ExpensesPage`}
          >
            expense
          </NavLink>

          <NavLink
            onClick={() => {
              props.openSideMenu();
              // auth.openSideMenu();
              props.history.push({ pathname: `${path}/GetReadyPage` });
            }}
            className={styles.navLink}
            exact
            to={`${path}/GetReadyPage`}
          >
            get ready
          </NavLink>
        </nav>
      </div>
    </Router>
  );
}

export default withAuthContext(MainNavigation);

/**
 * EXPLORE, GET READY - public routes
 * EXPENSES - private route
 *
 *  Once clicked - opens page at the main part.
 * EXPLORE - leads to image and video gallery of past tarvels. And also sights and interesting places
 * GET READY - opens schedule of needed things, overall rules and advises
 * EXPENSES - opens cost list, ticket and hotel links. Available if user is authenticated and authorized.
 * in case of non-authenticated and non-authorized, by click on link user will be redirected on login page
 * where user can also choose to register
 */
