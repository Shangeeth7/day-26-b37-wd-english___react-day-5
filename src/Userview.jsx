import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Userview() {
  const params = useParams();
  console.log(params);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(...searchParams);

  const [userData, setUserData] = useState({});
  useEffect(() => {
    loadUser();
  }, []);
  let loadUser = async () => {
    try {
      let user = await axios.get(
        `https://628209e19fac04c6540df59f.mockapi.io/users/${params.id}`
      );
      setUserData(user.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="userView">
      <h3>Name : {userData.name}</h3>
      <h3>Position : {userData.position}</h3>
      <h3>Office : {userData.office}</h3>
      <h3>Age : {userData.age}</h3>
      <h3>Start date :{userData.startDate}</h3>
      <h3>Salary : {userData.salary}</h3>
    </div>
  );
}

export default Userview;
