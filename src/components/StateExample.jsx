import React from "react";
import Test from "./Test";

class StateExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      name: undefined,
      test: []
    };
  }
  componentDidMount() {
    let test = [];
    for (let i = 0; i < 900; i++) {
      test.push({ test: i, tests: "TEST" + i, ttest: i, ttests: "TEST" + i });
    }
    setTimeout(() => {
      this.setState({
        loading: false,
        name: "Tom",
        test
      });
    }, 2000);
  }
  render() {
    return (
      <div>
        <div>
          {this.state.loading ? "Loading.." : `Hello ${this.state.name}`}
        </div>
        <Test test={this.state.test} />
      </div>
    );
  }
}

export default StateExample;
