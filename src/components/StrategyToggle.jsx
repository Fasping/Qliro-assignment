import React, { useState } from "react";
import styled from "styled-components";
import "./css/Button.css";
import "../App.css";

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.toggle ? "rgba(15, 248, 112, 0.8)" : "rgba(255, 255, 255, 0.1)"};
  width: 120px;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    width: 80px;
  }
`;

const StrategyToggle = ({ cbSetKeep, keep }) => {
  const [toggle, setToggle] = useState(keep);

  return (
    <div className="StrategySelection">
      <StyledButton
        onClick={() => {
          cbSetKeep(true);
          setToggle(!toggle);
        }}
        toggle={toggle}
        className="Button"
      >
        Keep
      </StyledButton>
      <StyledButton
        onClick={() => {
          cbSetKeep(false);
          setToggle(!toggle);
        }}
        toggle={!toggle}
        className="Button"
      >
        Change
      </StyledButton>
    </div>
  );
};

export default StrategyToggle;
