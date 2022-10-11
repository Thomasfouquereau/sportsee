import "./simpleLineChartStyle.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function CustomDot({cx, cy}) {
  return (
      <svg>
          <circle cx={cx} cy={cy} r={8} stroke="#FFFFFF0" fill="#FFFFFF75" />
          <circle cx={cx} cy={cy} r={4} stroke="white" fill="white" />
          <rect x={cx} y={0} width="321" height="295" fill="#00000020" />
      </svg>
  );
}

export default function SimpleLineChart(props) {

  const data = props.averageSessions; 

  return (
    <LineChart
      width={250}
      height={260}
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#FF0000"/>
      <XAxis dataKey="day" />
      <YAxis hide />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sessionLength" stroke="#fff" dot={false} activeDot={<CustomDot />} />
    </LineChart>
  );
}