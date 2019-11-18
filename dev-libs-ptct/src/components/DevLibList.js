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
