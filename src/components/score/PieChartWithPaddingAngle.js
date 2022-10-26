import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import Style from "./stylePieChart.module.css";

export default function score(props) {

  const data = [
    { name: "Group A", value: props.score },
    { name: "Group B", value: 1 },
  ];

  function ScoreCalc() {
    let score = props.score;
    let scoreCalc = score * 100;
    return scoreCalc;
  }

  const COLORS = ["#FF0000", "#fff",];

  return (
    <PieChart width={170}
      height={180}>
      <text x={30} y={20} textAnchor="middle" dominantBaseline="middle" >
        Score
      </text>
      <text x={85} y={80} textAnchor="middle" dominantBaseline="middle" tick={{fontSize: 10}} >
        {ScoreCalc()}%
      </text>
      <text x={85} y={100} textAnchor="middle" dominantBaseline="middle" className={Style.textScore} >
        de votre objectif
      </text>
      <Pie
        data={data}
        cx={80}
        cy={85}
        innerRadius={54}
        outerRadius={65}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        cornerRadius={40}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}

