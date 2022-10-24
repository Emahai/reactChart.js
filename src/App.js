import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Donors",
        data: UserData.map((data) => data.donors),
        backgroundColor: [
          "#B3E5FC",
          "#81D4FA",
          "#4FC3F7",
          "#29B6F6",
          "#039BE5",
        ],
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="App">
      <div style={{ width: 500 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 500 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 400 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
