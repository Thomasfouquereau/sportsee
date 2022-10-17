import style from "./simpleLineChartStyle.module.css";
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
import PropTypes from 'prop-types';

function CustomDot({ cx, cy }) {
  return (
    <svg>
      <circle cx={cx} cy={cy} r={6} stroke="#FFFFFF0" fill="#FFFFFF75" />
      <circle cx={cx} cy={cy} r={3} stroke="white" fill="white" />
      <rect x={cx} y={0} width="321" height="295" fill="#00000020" />
    </svg>
  );
}

export default function SimpleLineChart(props) {

  const data = props.averageSessions;

  const renderLegend = () => {
    return (
      <h2 className={style.text}>Durée moyenne des sessions</h2>
    );
  }
  
  return (
    <LineChart
      width={170}
      height={180}
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#FF0000" />
      <XAxis dataKey="day" />
      <YAxis hide />
      <Tooltip />
      <Legend content={renderLegend} verticalAlign="top" />
      <Line type="monotone" dataKey="sessionLength" stroke="#FFF" dot={false} activeDot={<CustomDot />} />
    </LineChart>
  );
}

SimpleLineChart.propTypes = {
  averageSessions: PropTypes.array
};