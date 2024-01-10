"use client";
import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  Scatter,
  ResponsiveContainer,
  XAxis,
} from "recharts";

const data = [
  {
    name: "Year 1",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 801,
  },
  {
    name: "Year 2",
    uv: 868,
    pv: 567,
    amt: 1506,
    cnt: 869,
  },
  {
    name: "Year 3",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 1398,
  },
  {
    name: "Year 4",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 1481,
  },
  {
    name: "Year 5",
    uv: 2220,
    pv: 2508,
    amt: 1100,
    cnt: 2509,
  },
  {
    name: "Year 6",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 1401,
  },
];

const AboutChart = React.memo(() => {
  return (
    <div className="w-full lg:mt-12 relative">
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart width={500} height={400} data={data}>
          <XAxis dataKey="name" scale="band" />
          <Area
            type="monotone"
            dataKey="amt"
            fill="text-softText"
            stroke="#E2B714"
          />
          <Bar dataKey="pv" barSize={20} fill="#E2B714" />
          <Bar dataKey="uv" barSize={20} fill="#E2B714" />
          <Line type="monotone" dataKey="uv" stroke="#E2B714" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
});

export default AboutChart;
