import React from "react";
import NewHeader from "../Other/NewHeader";
import TaskNumber from "../Other/TaskNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashBoard = (props) => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <NewHeader changeUser={props.changeUser} data={props.data} />
      <TaskNumber data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashBoard;
