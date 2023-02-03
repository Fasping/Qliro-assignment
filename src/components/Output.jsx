import React from "react";
import styled from "styled-components";

const StyledOutput = styled.div`
  font-size: 2em;
  line-height: 1em;
`;

const Output = (props) => {
  return (
    <StyledOutput>
      <p>Sample size: {props.simulation.sampleSize}</p>
      <p>
        Wins: {props.simulation.wins}/{props.simulation.sampleSize}
      </p>
      <p>Probability of winning: P={props.simulation.winRate}</p>
      <p>
        Strategy:{" "}
        {props.simulation.keep
          ? "keeping the initial decision (KEEP)"
          : "changing the decision (CHANGE)"}
      </p>
    </StyledOutput>
  );
};

export default Output;
