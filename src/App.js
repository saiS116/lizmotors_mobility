import React from "react";
import "./App.css";
import Timeline from "./components/Timeline";
import Phase from "./components/Phase";
import HorizontalBarChart from "./components/HorizontalBarChart";
function App() {
  return (
    <div className="App">
      <h1>Car Manufacturing Timeline</h1>
      <Timeline />
      <div className="phase-details">
        <Phase
          phaseName="Market Research"
          phaseDetails="Details about Market Research phase."
        />
        <Phase
          phaseName="Planning"
          phaseDetails="Details about Planning phase."
        />
        <Phase phaseName="Design" phaseDetails="Details about Design phase." />
        <Phase
          phaseName="Manufacturing"
          phaseDetails="Details about Manufacturing phase."
        />
        <Phase phaseName="Sales" phaseDetails="Details about Sales phase." />
      </div>
      <HorizontalBarChart />
    </div>
  );
}

export default App;
