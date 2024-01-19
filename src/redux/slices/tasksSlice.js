import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    todo: ["Create a POST endpoint for sharing","Create a POST endpoint for sharing"],
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
  },
});

export const { addTask, moveTask } = tasksSlice.actions;
export default tasksSlice.reducer;
