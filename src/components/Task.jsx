import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Cart from "./Cart";

const Task = ({ title }) => {
  const tasks = useSelector((store) => store.tasks[title]);
  let heading =
    title == "todo"
      ? "TODO"
      : title == "readyForDev"
      ? "READY FOR DEV"
      : title == "inDevelopment"
      ? "IN DEVELOPMENT"
      : title == "inReview"
      ? "IN REVIEW"
      : "DONE";
  return (
    <TASK>
      <h1>
        {heading} {tasks.length}
      </h1>
      <div className="flex-col">
        {tasks?.map((el) => (
          <Cart key={el} content={el} />
        ))}
      </div>
    </TASK>
  );
};

export default Task;

const TASK = styled.div`
  width: 18%;
  h1 {
    color: #626f86;
    background-color: #f1f2f4;
    padding: 10px;
    padding-right: 2%;
    font-size: 0.75rem; /* 12px */
    line-height: 1rem;
    font-weight: 470;
    border-radius: 3px;
    text-align: left;
    margin-bottom: 40px;
  }
  div {
  }
`;
