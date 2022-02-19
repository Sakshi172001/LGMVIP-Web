import React from "react";
import "./App.css";

const Users = ({ info, users }) => {
  return info ? (
    <div id="main">
      <h3> Click on Get Users button to get details about Users.</h3>
    </div>
  ) : (
    <div>
      {users.map((user) => (
        <div className="column2">
          {console.log(user)}
          <div className="profile">
            <p>User ID: {user.id}</p>
            <img src={user.avatar} alt={user.avatar} className="avatar"></img>
            <h1 className="name">
              {user.first_name} {user.last_name}
            </h1>
            <p className="email">{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
