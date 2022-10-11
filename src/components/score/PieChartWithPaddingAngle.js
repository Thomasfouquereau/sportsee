import React from "react";
import { PieChart, Pie, Cell } from "recharts";



export default function App(props) {

  const data = [
    { name: "Group A", value: props.score },
    { name: "Group B", value: 1 },
  ];
  const COLORS = ["#FF0000", "#fff",];

  return (
    <PieChart width={250} height={260}>
      <Pie
        data={data}
        cx={120}
        cy={120}
        innerRadius={70}
        outerRadius={85}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}