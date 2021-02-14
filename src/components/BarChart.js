import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  return (
    <div>
      {" "}
      <h1>BarChart Dashboard</h1>
      <Bar
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3]
            }
          ]
        }}
        height={400}
        width={600}
      />
    </div>
  );
};

export default BarChart;
