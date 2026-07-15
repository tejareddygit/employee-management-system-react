import React from "react";
import NewHeader from "../Other/NewHeader";
import CreateTask from "../Other/CreateTask";
import AllTasks from "../Other/AllTasks";

const AdminDashBoard = (props) => {
  return (
    <div className="h-screen w-full p-7">
      <NewHeader changeUser={props.changeUser} />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDashBoard;
