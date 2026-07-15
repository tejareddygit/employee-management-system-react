import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 text-sm">{data.category}</h3>
        <h4 className="text-sm">20 Feb 2024</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle} </h2>
      <p className="text-sm mt-2">{data.taskDescription} </p>
      <div mt-4>
        <button>Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
