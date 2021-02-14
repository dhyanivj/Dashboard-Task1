import React from "react";
import { Bar } from "react-chartjs-2";

const Horizontal = () => {
  return (
    <div className="line-chart">
      <h4>Bounce Rate by week (Sample)</h4>
      <Bar
        data={{
          labels: ["Red", "Yellow", "Blue"],
          datasets: [
            {
              label: "# of Votes",
              data: [18, 19, 23]
            }
          ]
        }}
        height={300}
        width={300}
      />
    </div>
  );
};

export default Horizontal;
