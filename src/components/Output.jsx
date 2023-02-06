import React from "react";
import styled from "styled-components";

const StyledOutput = styled.div`
  font-size: 2em;
  line-height: 1em;
`;

const Output = ({ simulation }) => {
  return (
    <StyledOutput>
      <p>Sample size: {simulation.sampleSize}</p>
      <p>
        Wins: {simulation.wins}/{simulation.sampleSize}
      </p>
      <p>Probability of winning: P={simulation.winRate}</p>
      <p>
        Strategy:{" "}
        {simulation.keep
          ? "keeping the initial decision (KEEP)"
          : "changing the decision (CHANGE)"}
      </p>
    </StyledOutput>
  );
};

export default Output;
