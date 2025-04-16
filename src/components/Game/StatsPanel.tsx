import { PieChart, Pie, Cell, Legend } from "recharts";
import { GameIcon } from "../Icons/GameIcon";

const COLORS = ["#ff4136", "#ffdc00", "#aaa"];

type Props = {
  rWins: number;
  yWins: number;
  draws: number;
  setShowStats: React.Dispatch<React.SetStateAction<boolean>>;
};

const StatsPanel = ({ rWins, yWins, draws, setShowStats }: Props) => {
  const rawData = [
    { name: "Wygrane (R)", value: rWins },
    { name: "Wygrane (Y)", value: yWins },
    { name: "Remisy", value: draws },
  ];

  const data = rawData.filter((item) => item.value > 0);

  if (data.length === 0) {
    return (
      <div className="stats-container">
        <p
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            fontSize: "18px",
            color: "#000",
          }}
        >
          Zagraj przynajmniej jedną grę, by zobaczyć statystyki 🎯
        </p>
        <GameIcon setShowStats={setShowStats} />
      </div>
    );
  }

  return (
    <div className="stats-container">
      <PieChart
        width={335}
        height={335}
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
          stroke="none"
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
      <GameIcon setShowStats={setShowStats} />
    </div>
  );
};

export default StatsPanel;
