import * as React from "react";
import "./PieChartComponent.css";
import { ResponsiveContainer, Pie, PieChart, Cell, Legend } from "recharts";

export default function PieChartComponent({ data }) {
  let seriesData;

  seriesData = [
    {
      value: parseFloat(data.total_correct_percentage
        ? data.total_correct_percentage
        : data.completed_assessments ),
      label: data.total_correct_percentage ? "Correct" : "Completed",
      color: "#2773FF",
    },
    {
      value: parseFloat(data.total_incorrect_percentage
        ? data.total_incorrect_percentage
        : data.in_progress_assessments),
      label: data.total_correct_percentage ? "Incorrect" : "In Progress",
      color: "#E3E8F0",
    },
  ];
  
  const renderCustomizedLabel = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, outerRadius, fill , value} = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 5) * cos;
    const sy = cy + (outerRadius + 5) * sin;
    const mx = cx + (outerRadius + 15) * cos;
    const my = cy + (outerRadius + 15) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 15;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 4}
          y={ey}
          dy={5}
          textAnchor={textAnchor}
        >
         {`${value}${data.total_correct_percentage ? "%" : ""}`}
        </text>
      </g>
    );
  };

  const COLORS = ["#2773FF", "#E3E8F0"];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Legend
          dataKey="label"
          verticalAlign="bottom"
          align="left"
          payload={seriesData.map((item, index) => ({
            id: item.name,
            value: item.label,
            color: item.color,
          }))}
          formatter={(value) => {
            const textColor = "#000";
            return <span style={{ color: textColor }}>{value}</span>;
          }}
        />
        <Pie
          dataKey="value"
          data={seriesData}
          fill="#8884d8"
          outerRadius="80%"
          startAngle={460}
          endAngle={90}
          label={renderCustomizedLabel}
        >
          {seriesData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
