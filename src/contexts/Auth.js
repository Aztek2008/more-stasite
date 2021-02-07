import React, { Component, createContext } from "react";

const Context = createContext();

const user = {
  name: "John Galt",
  email: "galt@gmail.com",
};

class AuthContext extends Component {
  static Consumer = Context.Consumer;

  state = {
    user: null,
    shouldLogin: false,
  };

  componentDidMount() {
    const persistedUser = JSON.parse(localStorage.getItem("currentUser"));

    this.setState({
      user: persistedUser,
    });
  }

  logIn = async () => {
    await this.setState({ user: user });

    localStorage.setItem("currentUser", JSON.stringify(this.state.user));
  };

  logOut = () => {
    this.setState({ user: null });

    localStorage.removeItem("currentUser");
  };

  render() {
    return (
      <Context.Provider
        value={{
          shouldLogin: this.state.shouldLogin,
          user: this.state.user,
          logout: this.logOut,
          login: this.logIn,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default AuthContext;
