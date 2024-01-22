import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Cart from "./Cart";
import { addTask, moveTask, updateTask } from "../redux/slices/tasksSlice";
import EditTask from "./EditTask";

const Task = ({ title, id }) => {
  // Fetch tasks from the Redux store
  const tasks = useSelector((store) => store.tasks[title]);

  // Determine the heading based on the task title
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

  // State for task creation
  const [create, setCreate] = useState(false);
  const [data,setData]=useState('');

  //States for edit task
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ data: "", index: "" });

  const dispatch = useDispatch();

  // Handle adding a new task
  const handleAddTask = () => {
    if (data === "") {
      alert("Enter Valid Task!!");
      return;
    }
    setCreate(false);
    // Dispatch action to add a new task
    dispatch(addTask({ title: title, task: data }));
    setData("");
  };

  // Handle the drag start event for tasks
  const handleDragStart = (e, taskIndex) => {
    // Serialize task data to be transferred during drag-and-drop
    const data = JSON.stringify({ taskIndex, title });
    e.dataTransfer.setData("application/json", data);
  };

  // Handle the drag over event during drag-and-drop
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handle the drop event during drag-and-drop
  const handleDrop = (e) => {
    e.preventDefault();
    // Identify the destination column based on the drop target id
    const toTitle = e.target.id;

    // Retrieve the serialized task data from the data transfer
    const jsonData = e.dataTransfer.getData("application/json");
    if (jsonData) {
      // Parse the serialized data to get taskIndex and title
      const { taskIndex, title } = JSON.parse(jsonData);
      console.log({ fromTitle: title, toTitle, taskIndex });
      // Dispatch action to move the task
      dispatch(moveTask({ fromTitle: title, toTitle, taskIndex }));
    }
  };

  // Handle the update task when clicking task
  const handleUpdateTask = (e, task, taskIndex) => {
    // Show the edit modal and set the task being edited
    setEditData({
      ...editData,
      data: task,
      index: taskIndex,
    });
    setIsEditing(true);
  };

  // Handle the edit task using redux
  const handleEditTask = (index, editData) => {
    dispatch(
      updateTask({
        title,
        taskIndex: index,
        updatedTask: editData,
      })
    );
    setIsEditing(false);
  };
  return (
    <TASK
      id={id}
      className="pl-2 pr-2"
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e)}
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
            handleUpdateTask={(e) => handleUpdateTask(e, el, ind)}
          />
        ))}
      </div>

      {/* Render the option to create a new task */}
      {!create && (
        <div className="hover:bg-[#f1f2f4] cursor-pointer ">
          <h2 onClick={() => setCreate(true)}>+ Create issue</h2>
        </div>
      )}
      {/* Render the input form for creating a new task */}
      {create && (
        <div id="addTask">
          {" "}
          <input
            type="text"
            value={data}
            className="bg-[#ffffff] border border-gray-500"
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <button
            className="bg-[#626f86] text-[#ffffff]"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>
      )}

      {isEditing && (
        <EditTask
          editData={editData}
          setEditData={setEditData}
          handleEditTask={handleEditTask}
          setIsEditing={setIsEditing}
        />
      )}
    </TASK>
  );
};

export default Task;

const TASK = styled.div`
  width: 18%;
  background-color: #f7f8f9;
  padding-bottom: 40px;
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
