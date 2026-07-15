import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvide";
const AllTasks = () => {
  const [userData, setuserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded">
      <div className="bg-red-400 py-2  px-4 mb-2 flex justify-between rounded">
        <h2 className="w-1/5">Employee</h2>
        <h3 className="w-1/5">New Task</h3>
        <h3 className="w-1/5">Active Task</h3>
        <h3 className="w-1/5">Completed</h3>
        <h3 className="w-1/5">Failed</h3>
      </div>
      <div className=" overflow-auto">
        {userData.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="border-2 border-emerald-500 py-2 px-4 mb-2 flex justify-between rounded"
            >
              <h2 className="w-1/5" id="one">
                {elem.firstName}
              </h2>
              <h3 className="w-1/5" id="two">
                {elem.taskNumbers.newTask}
              </h3>
              <h3 className="w-1/5" id="three">
                {elem.taskNumbers.active}
              </h3>
              <h3 className="w-1/5 " id="four">
                {elem.taskNumbers.completed}
              </h3>
              <h3 className="w-1/5" id="five">
                {elem.taskNumbers.failed}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTasks;
