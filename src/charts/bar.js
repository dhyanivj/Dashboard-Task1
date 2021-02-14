import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  return (
    <div className="line-chart">
      <h4>Bounce Rate by week (Sample)</h4>
      <Bar
        data={{
          labels: ["Red", "Yellow", "Blue"],
          datasets: [
            {
              label: "# of Votes",
              data: [18, 19, 23],
              backgroundColor: ["#7CB9E8", "#00308F", "#72A0C1"]
            }
          ]
        }}
        height={200}
        width={300}
        options={{
          maintainAspectRatio: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }}
      />
    </div>
  );
};

export default BarChart;
