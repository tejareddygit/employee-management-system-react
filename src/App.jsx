import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/login";
import EmployeeDashBoard from "./components/DashBoard/EmployeeDashBoard";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvide";

const App = () => {
  const [user, setuser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [userData, setuserData] = useContext(AuthContext);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setuser(userData.role);

      if (userData.role === "employee") {
        setloggedInUserData(userData.data);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == "123") {
      setuser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && password == e.password,
      );
      if (employee) {
        setuser("employee");
        setloggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee }),
        );
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashBoard changeUser={setuser} />
      ) : (
        <EmployeeDashBoard changeUser={setuser} data={loggedInUserData} />
      )}
    </>
  );
};

export default App;
