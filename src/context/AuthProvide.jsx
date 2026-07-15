import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
export const AuthContext = createContext();
const AuthProvide = ({ children }) => {
  const [userData, setuserData] = useState(null);
  useEffect(() => {
    setLocalStorage();
    const { employee } = getLocalStorage();
    setuserData(employee);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData, setuserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvide;
