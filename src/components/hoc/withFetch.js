import React, { Component } from "react";
import axios from "axios";

const withFetch = (url) => (WrappedCompomnent) => {
  return class withFetch extends Component {
    state = {
      data: [],
      loading: false,
      error: null,
    };

    componentDidMount() {
      this.setState({ loading: true });

      axios(url)
        .then((data) => {
          console.log("data", data); // JUST HAVE A LOOK
          this.setState({ data });
        })
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }

    render() {
      return <WrappedCompomnent {...this.props} {...this.state} />;
    }
  };
};

export default withFetch;

// EXPORTS FROM HOCCED COMPONENT: export default withFetch('{url}')({HOCCED COMPONENT}) CARRYING
