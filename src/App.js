import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import HelloMessage from "./components/HelloMessage";
// import StateExample from "./components/StateExample";
// import FCDemo from "./components/FCDemo";
import Table from "./components/Table";
import { init, analytics, FBDatabase } from "./config/firebase";
import ChartComponent from "./components/ChartComponent";
import moment from "moment";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    init();
    analytics();
    setLoading(false);
  }, []);
  const onClick = () => {
    FBDatabase()
      .ref("ping")
      .set(moment().unix());
  };
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {!loading && <ChartComponent {...{ type: "co2" }} />}
      {!loading && <ChartComponent {...{ type: "humidity" }} />}
      {!loading && <ChartComponent {...{ type: "temperature" }} />}
      <button onClick={onClick}>Ping</button>
      {/* <Table /> */}
      {/* </header> */}
    </div>
  );
}

export default App;
