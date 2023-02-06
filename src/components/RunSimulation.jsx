import React from "react";
import styled from "styled-components";

const StyledButton = styled.button``;

const ButtonContainer = styled.div`
  text-align: center;
`;

const RunSimulation = ({ simulate, sampleSize, keep, numberOfDoors }) => {
  return (
    <ButtonContainer>
      <StyledButton
        className="Button"
        onClick={() => simulate(sampleSize, keep, numberOfDoors)}
      >
        Run simulation
      </StyledButton>
    </ButtonContainer>
  );
};

export default RunSimulation;
