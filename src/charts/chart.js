import React from "react";
import "./chart.css";
import LineChart from "./line-chart";
import LineChart2 from "./line-chart";
import PieChart from "./pie";
import BarChart from "./bar";

const Chart = () => {
  return (
    <>
      <div className="chart">
        <LineChart />
        <LineChart2 />
      </div>
      <div className="secondrow">
        <PieChart />
        <BarChart />
      </div>
    </>
  );
};

export default Chart;
