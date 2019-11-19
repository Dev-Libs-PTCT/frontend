import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import StoryCard from "./StoryCard";

const DevLibList = props => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/devLib")
      .then(res => {
        console.log(res.data, "");
        setUsers(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
//a pagination system to dyplay only 5 dev-lib per page would be great
  return (
    <div>
      <h1>Created Dev-Libs</h1>
      <div>
        {users.map(lib => (
          <StoryCard key={lib.id} lib={lib} user_id={lib.user_id} />
        ))}
      </div>
    </div>
  );
};
export default DevLibList;
