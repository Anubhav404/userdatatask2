import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [user, setUser] = useState([]);

  // useEffect(() => {
  //   loadUsers();
  // }, []);

  const loadUsers = async () => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((data) => setUser(data.data.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <h1>Hello Everyone</h1>
      <button onClick={loadUsers}>GET DATA</button>

      <h2>User : </h2>
      {user.map((userDetails, id) => (
        <>
          <img src={userDetails.avatar} alt="" />
          <div className="nameandemail">
            <li key={id}>Name :- {userDetails.first_name + userDetails.last_name} </li>
            <li>  Email :- {userDetails.email}</li>
          </div>
        </>
      ))}
    </div>
  );
}

export default App;
