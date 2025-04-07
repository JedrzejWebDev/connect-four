import { PieChart, Pie, Cell, Legend } from "recharts";
import { FaGamepad } from "react-icons/fa";
import "./StatsChart.css";

const data = [
  { name: "Wygrane (R)", value: 3 },
  { name: "Wygrane (Y)", value: 3 },
  { name: "Remisy", value: 3 },
];
const COLORS = ["#ff4136", "#ffdc00", "#aaa"];

type Props = {
    setShowStats: React.Dispatch<React.SetStateAction<boolean>>;
};

export const StatsChart = ({setShowStats} : Props) => (
  <div className="stats-container">
    <PieChart
      width={320}
      height={320}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
        animationDuration={0}
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend
        layout="vertical"
        content={() => (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                marginTop: "20px",
                marginBottom: "12px",
                color: COLORS[0],
                fontSize: "16px",
              }}
            >
              🟥 Wygrane (R)
            </p>
            <p
              style={{
                marginBottom: "12px",
                color: COLORS[1],
                fontSize: "16px",
              }}
            >
              🟨 Wygrane (Y)
            </p>
            <p
              style={{
                marginBottom: "5px",
                color: COLORS[2],
                fontSize: "16px",
              }}
            >
              ⬜ Remisy
            </p>
          </div>
        )}
      />
    </PieChart>
    <FaGamepad className="gamepad-icon" onClick={() => setShowStats(false)}/>
  </div>
);
