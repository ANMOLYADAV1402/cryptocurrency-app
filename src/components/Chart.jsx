import moment from "moment/moment";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  Title,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  Title,
  LinearScale,
  PointElement,
  LineElement
);

const Chart = ({ time, days, currency, arr = [] }) => {
  const prices = [];
  const dates = [];

    for (let i = 0; i < arr.length; i++) {
        if(days === '24h'){dates.push(new Date(arr[i][0]).toLocaleTimeString())}
        else{dates.push(new Date(arr[i][0]).toLocaleDateString());}

        prices.push(arr[i][1]);
    }

  const data = {
    labels: dates,
    datasets: [
      {
        label: `Prices in ${currency}`,
        data: prices,
        borderColor: "black",
      },
    ],
  };

  return (
    <div className="chart-container">
      <h3>Price Chart</h3>
      <p className="last-updated">
        Last Updated: {moment(time).startOf("ss").fromNow()}
      </p>

      <div className="chart-box">
        <Line
          options={{
            responsive: true,
          }}
          data={data}
        />
        
      </div>
    </div>
  );
};

export default Chart;
