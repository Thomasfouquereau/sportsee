import "./simpleRadarChartStyle.css";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

export default function SimpleRadarChart(props) {
  console.log(props);
  const data = props.performance
  const datakind = props.subject;
  return (
    <RadarChart
      cx={125}
      cy={130}
      outerRadius={70}
      width={250}
      height={260}
      data={data}
      
    >
      <PolarGrid radialLines={false} />
      <PolarAngleAxis dataKey="subject" fontSize={12} tick={{ fill: '#fff' }} />
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