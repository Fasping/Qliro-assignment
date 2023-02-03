import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  margin-top: 10px;
  text-align: center;
  line-height: 50px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: rgba(8, 134, 165, 1);
  text-decoration: none;
  font-family: Lobster;
  transform: skewY(-5deg);
  margin: 30px;
  font-size: 3em;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    font-size: 2em;
  }
  :hover {
    color: rgba(8, 134, 165, 1);
    transform: scale(1.1) skewY(-5deg);
  }
`;

const Title = () => {
  return (
    <a
      href="https://en.m.wikipedia.org/wiki/Monty_Hall_problem"
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledTitle>Monty Hall problem</StyledTitle>
    </a>
  );
};

export default Title;
