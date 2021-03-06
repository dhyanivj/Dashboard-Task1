import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  return (
    <div className="line-chart">
      <h4>Visit by Week of Year</h4>
      <Line
        data={{
          labels: [10, 20, 30, 40, 50, 60, 70, 80, 90],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 23, 35, 2, 15, 61, 3, 25, 88, 65],
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

export default LineChart;
