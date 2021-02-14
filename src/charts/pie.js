import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  return (
    <div className="line-chart">
      <h4>Bounce Rate by week (Sample)</h4>
      <Pie
        data={{
          labels: ["Mango", "Apple", "orange"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 23],
              backgroundColor: ["#7CB9E8", "#00308F", "#72A0C1"]
            }
          ]
        }}
        height={200}
        width={300}
      />
    </div>
  );
};

export default PieChart;
