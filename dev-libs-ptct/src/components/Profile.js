import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import DevLibList from "./DevLibList";
import ProfileNav from "./ProfileNav"
import axiosWithAuth from "../utils/axiosWithAuth";

export default function Profile() {
  const [profLib, setprofLib] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [libsPerPage, setLibsPerPage] = useState(10);
  const [isFetching, setFetching] = useState(false);
  const id = Number(localStorage.getItem("user_id"));
  console.log(id);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/devLib/`)
      .then(res => {
        console.log("profile", res.data);
        setprofLib(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [isFetching]);

  if (!profLib) {
    return <h1>Loading..</h1>;
  } else if (profLib.length === 0) {
    return <h2>Nothing to see here!</h2>;
  }

  return (
    <div>
      <ProfileNav />
      {profLib.map(lib => {
        if (lib.user_id === id) {
          return (
            <div key={lib.id}>
              <ProfileCard                
                lib={lib}
                isFetching={isFetching}
                setFetching={setFetching}
              />
            </div>
          );
        }
      })}
    
      <DevLibList />
     
    </div>
  );
}
