import React, { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/Users/UserContext";

const UserList = () => {
  const { getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return <div>user list</div>;
};

export default UserList;
