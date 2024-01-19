import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Cart from "./Cart";
import { addTask, moveTask } from "../redux/slices/tasksSlice";

const Task = ({ title, id }) => {
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
  const [create, setCreate] = useState(false);
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if(data===""){
        alert("Enter Valid Task!!")
        return
    }
    setCreate(false);
    console.log({ title: title, task: data });
    dispatch(addTask({ title: title, task: data }));
    setData("");
  };

  const handleDragStart = (e, taskIndex) => {
    console.log(title, "id");
    const data = JSON.stringify({ taskIndex, title });
    e.dataTransfer.setData("application/json", data);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const toTitle = e.target.id;

    const jsonData = e.dataTransfer.getData("application/json");
    if (jsonData) {
      const { taskIndex, title } = JSON.parse(jsonData);
      console.log({ fromTitle: title, toTitle, taskIndex });
      dispatch(moveTask({ fromTitle: title, toTitle, taskIndex }));
    }
  };
  return (
    <TASK
      id={id}
      className="pl-2 pr-2"
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, title)}
    >
      <h1>
        {heading} {tasks.length}
      </h1>
      <div className="flex-col">
        {tasks?.map((el, ind) => (
          <Cart
            key={ind}
            title={title}
            content={el}
            onDragStart={(e) => handleDragStart(e, ind)}
          />
        ))}
      </div>
      {!create && (
        <div className="hover:bg-[#f1f2f4] cursor-pointer">
          <h2 onClick={() => setCreate(true)}>+ Create issue</h2>
        </div>
      )}
      {create && (
        <div id="addTask">
          {" "}
          <input
            type="text"
            value={data}
            className="bg-[#ffffff]"
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <button className="bg-[#626f86] text-[#ffffff]" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
      )}
    </TASK>
  );
};

export default Task;

const TASK = styled.div`
  width: 18%;
  background-color: #f7f8f9;
  padding-bottom: 20px;
  h1 {
    color: #626f86;
    background-color: #f7f8f9;
    padding: 10px;
    padding-right: 2%;
    font-size: 0.75rem; /* 12px */
    line-height: 1rem;
    font-weight: 500;
    border-radius: 3px;
    text-align: left;
    margin-top: 10px;
    margin-bottom: 40px;
  }
  h1:hover {
    background-color: #f1f2f4;
  }
  #addTask {
    background-color: #ffffff;
    color: black;
    padding: 10px;
    margin-bottom: 20px;
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem; /* 20px */
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    min-height: 75px;
    border-radius: 4px;
    text-align: center;
    input {
      min-height: 50px;
      margin-bottom: 5px;
    }
  }
`;
