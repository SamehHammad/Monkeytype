"use client";
import { XAxis, Tooltip, AreaChart, Area, ResponsiveContainer } from "recharts";
import { useTestCtx } from "../../context/TestContext";

const Chart = () => {
  const { acc, wpm, typo } = useTestCtx();
  const data = [
    {
      name: "Typing Speed",
      uv: 2000,
      wpm: 9800,
      amt: 2290,
    },
    {
      name: "Typing Speed",
      uv: 3000,
      wpm: 3398,
      amt: 2210,
    },
    {
      name: "Typing Speed",
      uv: 4000,
      wpm: 8400,
      amt: 2400,
    },
    {
      name: "Typing Speed",
      uv: 2780,
      wpm: 3908,
      amt: 2000,
    },
    {
      name: "Typing Speed",
      uv: 1890,
      wpm: 4800,
      amt: 2181,
    },
    {
      name: "Typing Speed",
      uv: 2390,
      wpm: 3800,
      amt: 2500,
    },
    {
      name: "Typing Speed",
      uv: 3490,
      wpm: 4300,
      amt: 2100,
    },
  ];
  function generateElements(typo) {
    const elements = [];
    for (let i = 0; i < typo; i++) {
      elements.push(
        <p key={i} className={`z-100 text-typoColor `}>
          x
        </p>
      );
    }
    return elements;
  }

  return (
    <div className="w-full lg:mt-12 relative">
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          {/* <Tooltip /> */}
          <Area
            type="monotone"
            dataKey="wpm"
            stroke="#E2B714"
            fill="#2D2F31"
            strokeWidth={2}
          />
        </AreaChart>
        <div className="flex w-[90%] justify-center flex-wrap absolute md:top-[16vh] xs:top-[7vh] text-xs font-black gap-10 max-h-24 overflow-hidden">
          {generateElements(typo ? typo : 0)}
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
