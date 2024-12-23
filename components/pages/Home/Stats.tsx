import FactCard from "./FactCard";
import Numbercard from "./Numbercard";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Stats = () => {
  return (
    <div className="flex lg:flex-row flex-col  gap-[10px]">
      <div className="bg-glass  lg:h-[470px] h-52 lg:w-[75%] w-full rounded-[20px] border-custom">
        {/*! dont delete commented code below of graph */}

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fill: "#ffff" }} />
            <YAxis tick={{ fill: "#ffff" }} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col gap-6 justify-between lg:w-[25%] w-full">
        <FactCard
          number="754"
          text="Total Transactions Today"
          url="/icons/estate.png"
        />
        <FactCard number="21.7 B" text="Total Worth" url="/icons/money.png" />
        <Numbercard />
      </div>
    </div>
  );
};

export default Stats;
