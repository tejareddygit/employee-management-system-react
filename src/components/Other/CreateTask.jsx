import React, { use, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvide";
const CreateTask = () => {
  const [userData, setuserData] = useContext(AuthContext);
  const [taskTitle, settaskTitle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [assgnTO, setassgnTO] = useState("");
  const [category, setcategory] = useState("");

  const [newTask, setnewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault(e);

    setnewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });
    const data = userData;

    data.forEach((elem) => {
      if (assgnTO == elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1;
      }
    });
    setuserData(data);
    console.log(data);
    settaskTitle("");
    setcategory("");
    settaskDate("");
    setassgnTO("");
    settaskDescription("");
  };
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                settaskTitle(e.target.value);
              }}
              type="text"
              placeholder="Make Ui design"
              className="text-sm py-1 px-2 w-4/5 rounded outline-non bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                settaskDate(e.target.value);
              }}
              type="date"
              className="text-sm py-1 px-2 w-4/5 rounded outline-non bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assigned to</h3>
            <input
              value={assgnTO}
              onChange={(e) => {
                setassgnTO(e.target.value);
              }}
              type="text"
              placeholder="employee Name"
              className="text-sm py-1 px-2 w-4/5 rounded outline-non bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
              type="text"
              placeholder="design,dev,etc"
              className="text-sm py-1 px-2 w-4/5 rounded outline-non bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              settaskDescription(e.target.value);
            }}
            name=" id="
            cols="30"
            rows="10"
            className="border-2 w-full border-gray-400"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
