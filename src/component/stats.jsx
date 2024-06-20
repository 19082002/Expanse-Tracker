import { useSelector } from "react-redux";
import "../css/stat.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";
// import faker from 'faker';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    // title: {
    //   display: true,
    //   text: ' Total Savings',
    //   borderColor:'#dbf574',
    //   backgroundColor:'#dbf574'
    // },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Stats() {
  const balance = useSelector((state) => state.monthSave).save;
  const data = {
    labels,
    datasets: [
      {
        label: "Total Savings",
        data: [
          balance[0],
          balance[1],
          balance[2],
          balance[3],
          balance[4],
          balance[5],
          balance[6],
          balance[7],
          balance[8],
          balance[9],
          balance[10],
          balance[11],
        ],
        borderColor: "#dbf574",
        backgroundColor: "rgb(241, 147, 152)",
      },
    ],
  };
  return (
    <div className="componentmain">
      {/* welcome to the stats */}
      <div className="statmain">
        <p className="title">Total Savings</p>
        <div className="chart">
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
}
