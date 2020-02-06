import React, { useRef, useEffect } from "react";
const data = () => {
  let data = [];
  for (let i = 1; i < 101; i++) {
    data.push({ fName: `${i} FN`, lName: `${i} LN`, i });
  }
  return data;
};
class Table extends React.Component {
  onScroll = e => {
    window.ee = { ...e };
    //   console.log(e.target.scrollTop);
    let o = e.target;
    console.log(o.offsetHeight , o.scrollTop, o.scrollHeight);
    if (o.offsetHeight + o.scrollTop >= o.scrollHeight) {
      console.log("End");
      //   alert("End");
    }
    if (o.offsetHeight + o.scrollTop >= o.scrollHeight) {
      console.log("End");
      //   alert("End");
    }
  };
  render() {
    return (
      <div
        style={{ width: "100%", height: 500, overflow: "scroll" }}
        onScroll={this.onScroll}
      >
        <table
          className="tbl"
          style={{ width: "100%" }}
          onScroll={e => console.log(e)}
        >
          <thead>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </thead>
          <tbody style={{ maxHeight: 100 }}>
            {data().map((i, key) => (
              <LineItem {...{ i, key }} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Table;

class LineItem extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    console.log(this.props.key, "didMount");
  };
  render() {
    const { key, i } = this.props;
    return (
      <tr {...{ key }} style={{ height: 100 }}>
        <td>{i.fName}</td>
        <td>{i.lName}</td>
        <td>{i.i}</td>
      </tr>
    );
  }
}
