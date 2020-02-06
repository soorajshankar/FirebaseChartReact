import React, { useEffect, useState } from "react";
import { FBDatabase } from "../config/firebase";
import moment from "moment";
import Plot from "react-plotly.js";

const ChartComponent = ({ type, unit }) => {
  const [data, setdata] = useState({
    x: [],
    y: [],
    type: "scatter"
  });
  var ref;
  useEffect(() => {
    ref = FBDatabase().ref(type);
    ref.once("value").then(snapshot => {
      const snapData = snapshot.val();
      var gData;
      setdata(data => {
        var newData = { ...data };
        var { x, y } = newData;
        for (let [key, value] of Object.entries(snapData)) {
          x = [...x, moment.unix(key).format()];
          y = [...y, value];
        }
        gData = { ...newData, x, y };
        childListener(ref, snapData);
        return gData;
      });
    });
  }, []);
  const childListener = (ref, snapData) =>
    ref.on("child_added", child => {
      if (!(child.key in snapData)) {
        setdata(data => {
          var newData = { ...data };
          var { x, y } = newData;
          x = [...x, moment.unix(child.key).format()];
          y = [...y, child.val()];
          return { ...newData, x, y };
        });
      }
    });

  return <Plot data={[data]} layout={{ title: type }} />;
};

export default ChartComponent;
