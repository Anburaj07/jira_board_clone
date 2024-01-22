import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    todo: ["Create a POST endpoint for sharing"],
    readyForDev: ["Enhanching user Authentication"],
    inDevelopment: ["Create a PUT endpoint to update"],
    inReview: ["Create a ER Diagram"],
    done: ["Create a DELETE endpoint"],
  },
  reducers: {
    addTask: (state, action) => {
      const { title, task } = action.payload;
      state[title].push(task);
    },
    moveTask: (state, action) => {
      const { fromTitle, toTitle, taskIndex } = action.payload;
      const [movedTask] = state[fromTitle].splice(taskIndex, 1);
      state[toTitle].push(movedTask);
    },
    updateTask: (state, action) => {
      const { title, taskIndex, updatedTask } = action.payload;
      state[title][taskIndex] = updatedTask;
    },
  },
});

export const { addTask, moveTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
