import "./simpleBarChartStyle.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function SimpleBarChart(props) {
  const data = props.activity;

  return (
    <BarChart
      width={835}
      height={320}
      data={data}
      fill="red"
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="2 2" vertical={false} />
      <XAxis dataKey="day" />
      <YAxis orientation="right" />
      <Tooltip />
      <Legend />
      <Bar dataKey="kilogram" fill="#282D30" radius={[6, 6, 0, 0]} barSize={7} />
      <Bar dataKey="calories" fill="#E60000" radius={[6, 6, 0, 0]} barSize={7} />
    </BarChart>
  );
}