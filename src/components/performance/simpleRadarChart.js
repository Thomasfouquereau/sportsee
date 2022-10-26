import "./simpleRadarChartStyle.css";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";
import PropTypes from 'prop-types';

export default function SimpleRadarChart(props) {
  const temp = props.performance.map((obj) => {
    return {
      value: obj.value,
      subject: props.subject[obj.kind]
    }
  })
 
  return (
    <RadarChart
      cx={85}
      cy={90}
      outerRadius={50}
      width={170}
      height={180}
      data={temp}
    >
      <PolarGrid radialLines={false} />
      <PolarAngleAxis dataKey="subject" fontSize={8} tick={{ fill: '#fff' }} />
      <PolarRadiusAxis display='none' />
      <Radar
        name="Mike"
        dataKey="value"
        stroke="#FF0101B2"
        fill="#FF0101B2"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}

SimpleRadarChart.propTypes = {
  performance: PropTypes.arrayOf(PropTypes.shape({
    kind: PropTypes.number,
    value: PropTypes.number
  })),
  subject: PropTypes.object
};