import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EarningsChart = ({ data }) => {
  return (
    <div className="chartContainer">
      <h4>Property Price Overview</h4>
      <Line data={data} />
    </div>
  );
};

export default EarningsChart;
