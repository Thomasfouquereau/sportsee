import style from "./style.module.css";
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
import PropTypes from 'prop-types';

export default function SimpleBarChart(props) {
  
  const data = props.activity;

  const renderLegend = () => {
    return (
      <div className={style.container}>
        <h2 className={style.text}>Activité quotidienne</h2>
        <ul className={style.legende}>
          <li className={style.legendeItemKG}>Poids (kg)</li>
          <li className={style.legendeItemCal}>Calories brûlées (kCal)</li>
        </ul>
      </div>
    );
  }

  return (
    <BarChart
      width={540}
      height={220}
      data={data}
      fill="red"
      padding={{ top: 20, right: 0, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="2 2" vertical={false} />
      <XAxis dataKey="day" tick={{fontSize: 10}} />
      <YAxis orientation="right" tick={{fontSize: 10}} />
      <Tooltip />
      <Legend  verticalAlign="top" content={renderLegend} />
      <Bar dataKey="kilogram" fill="#282D30" radius={[6, 6, 0, 0]} barSize={7} />
      <Bar dataKey="calories" fill="#E60000" radius={[6, 6, 0, 0]} barSize={7} />
    </BarChart>
  );
}

SimpleBarChart.propTypes = {
  activity: PropTypes.array.isRequired
};