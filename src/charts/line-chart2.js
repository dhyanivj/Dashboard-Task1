import React from "react";
import { Line } from "react-chartjs-2";

const LineChart2 = () => {
  return (
    <div className="line-chart">
      <h4>Bounce Rate by week (Sample)</h4>
      <Line
        data={{
          labels: [10, 20, 30, 40, 50, 60, 70, 80, 90],
          datasets: [
            {
              label: "Number of unique visitors",
              data: [52, 19, 83, 35, 2, 25, 36, 28, 54],
              backgroundColor: ["#323484"]
            }
          ]
        }}
        height={200}
        width={300}
      />
    </div>
  );
};

export default LineChart2;
