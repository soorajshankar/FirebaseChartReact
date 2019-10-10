import React from "react";

class StateExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      name: undefined
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
        name: "Tom"
      });
    }, 2000);
  }
  render() {
    return (
      <div>{this.state.loading ? "Loading.." : `Hello ${this.state.name}`}</div>
    );
  }
}

export default StateExample;
