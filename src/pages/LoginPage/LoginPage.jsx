import React, { Component } from "react";

import styles from "./LoginPage.module.css";

export default class LoginPage extends Component {
  render() {
    return (
      <div className={styles.formContainer}>
        LOGIN FORM
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button className={styles.button} onClick={() => this.props.login()}>
          <span>Log in</span>
        </button>
      </div>
    );
  }
}
