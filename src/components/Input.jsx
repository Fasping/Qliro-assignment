import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px solid #000000;
  text-align: center;
  padding: 5px;
  margin: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  width: 150px;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    width: 100px;
  }
`;

const InputContainer = styled.div`
  text-align: center;
`;

const Input = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [sampleSize, setSampleSize] = useState(props.initial);

  return (
    <InputContainer>
      <StyledInput
        type="text"
        placeholder={"Sample size"}
        onChange={(event) => {
          setSampleSize(event.target.value);
          props.cbSampleSize(event.target.value);
        }}
      ></StyledInput>
    </InputContainer>
  );
};

export default Input;
