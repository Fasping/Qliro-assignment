import React from "react";
import styled from "styled-components";

const StyledButton = styled.button``;

const ButtonContainer = styled.div`
  text-align: center;
`;

const RunSimulation = (props) => {
  return (
    <ButtonContainer>
      <StyledButton
        className="Button"
        onClick={() =>
          props.simulate(props.sampleSize, props.keep, props.numberOfDoors)
        }
      >
        Run simulation
      </StyledButton>
    </ButtonContainer>
  );
};

export default RunSimulation;
