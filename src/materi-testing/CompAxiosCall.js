import axios from "axios";
import React from "react";

const CompAxiosCall = () => {
  const [users, setUsers] = React.useState([]);

  const getUsersData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  return (
    <div>
      <p>List member kabayan coding: </p>
      <button onClick={getUsersData} data-testid="get-user">get user</button>
      {users.map((user, i) => {
        return <p key={i} data-testid="user-name">{user.name}</p>;
      })}
    </div>
  );
};

export default CompAxiosCall;
