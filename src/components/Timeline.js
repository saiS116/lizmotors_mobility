import React from "react";
import "./Timeline.css";

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="phase" id="market-research">
        Market Research
      </div>
      <div className="phase" id="planning">
        Planning
      </div>
      <div className="phase" id="design">
        Design
      </div>
      <div className="phase" id="manufacturing">
        Manufacturing
      </div>
      <div className="phase" id="sales">
        Sales
      </div>
    </div>
  );
};

export default Timeline;
