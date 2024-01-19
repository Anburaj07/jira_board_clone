import React from "react";
import styled from "styled-components";
import Task from "./Task";

const Board = () => {
  return (
    <BOARD>
      <Task id={"todo"} title={"todo"} />
      <Task id={"readyForDev"} title={"readyForDev"} />
      <Task id={"inDevelopment"} title={"inDevelopment"} />
      <Task id={"inReview"} title={"inReview"} />
      <Task id={"done"} title={"done"} />
    </BOARD>
  );
};

export default Board;

const BOARD = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  /* background-color: #f7f8f9; */
`;
