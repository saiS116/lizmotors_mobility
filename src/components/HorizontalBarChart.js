import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { options } from "./options";
import "./horizontal.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HorizontalBarChart = () => {
  const [state, setState] = useState({
    positive: 13451,
    negatives: 11839,
    comments: 10463,
  });
  const { positive, negatives, comments } = state;

  const data = {
    labels: ["Positive", "Negative", "Comments"],
    datasets: [
      {
        label: "'# of Reviews'",
        data: [positive, negatives, comments],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const changeData = (val) => {
    if (val === "tol") {
      setState({
        ...state,
        positive: randomNumber(0, 15000),
        negatives: randomNumber(0, 15000),
        comments: randomNumber(0, 15000),
      });
    } else if (val === "pos") {
      setState({ ...state, positive: randomNumber(0, 15000) });
    } else if (val === "neg") {
      setState({ ...state, negatives: randomNumber(0, 15000) });
    } else if (val === "com") {
      setState({ ...state, comments: randomNumber(0, 15000) });
    }
  };
  return (
    <div className="bar-container">
      <div className="bar">
        <Bar data={data} options={options} />
      </div>
      <div className="bar-hover">
        <h3 onMouseEnter={() => changeData("tol")}>Total Reviews</h3>
        <h3 onMouseEnter={() => changeData("pos")}>Positives</h3>
        <h3 onMouseEnter={() => changeData("neg")}>Negatives</h3>
        <h3 onMouseEnter={() => changeData("com")}>Comments</h3>
      </div>
    </div>
  );
};

export default HorizontalBarChart;
