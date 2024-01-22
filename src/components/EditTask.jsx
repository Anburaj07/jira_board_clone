import React from "react";

const EditTask = ({ editData, setEditData, handleEditTask, setIsEditing }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    setEditData({
      ...editData,
      data: value,
    });
  };
  return (
    <div
      id="editTask"
      className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
    >
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-4">Edit Task</h2>
        <input
          type="text"
          value={editData.data}
          className="bg-[#ffffff] mb-4 p-2 border border-gray-300 rounded"
          onChange={handleChange}
        />
        <div className="flex justify-end">
          <button
            className="bg-[#626f86] text-[#ffffff] px-4 py-2 rounded"
            onClick={() => {
              // Dispatch action to update the task
              handleEditTask(editData.index, editData.data);
            }}
          >
            Save
          </button>
          <button
            className="ml-2 text-gray-600 hover:text-red-500"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
