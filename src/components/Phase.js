import React from "react";

const Phase = ({ phaseName, phaseDetails }) => {
  return (
    <div className="phase">
      <h2>{phaseName}</h2>
      <p>{phaseDetails}</p>
    </div>
  );
};

export default Phase;
