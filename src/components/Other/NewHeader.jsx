import React from "react";
import { setLocalStorage } from "../../utils/LocalStorage";

const NewHeader = (props) => {
  // console.log(data);
  const logout = () => {
    localStorage.removeItem("loggedInUser");
    props.changeUser("");
    // window.location.reload();
  };
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold ">username🙌</span>
      </h1>
      <button
        onClick={logout}
        className="bg-red-600 text-lg font-medulm text-white p-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default NewHeader;
