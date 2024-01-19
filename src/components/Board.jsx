import React from "react";
import styled from "styled-components";
import Task from "./Task";

const Board = () => {
  return <BOARD>
    <Task title={"todo"}/>
    <Task title={"readyForDev"}/>
    <Task title={"inDevelopment"}/>
    <Task title={"inReview"}/>
    <Task title={"done"}/>
  </BOARD>;
};

export default Board;

const BOARD = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
  margin-top: 40px;
  background-color: #f7f8f9;
`;
