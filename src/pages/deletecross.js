import React from "react";
import axios from "axios";
import { useState } from "react";

const Deletecross = () => {
  const [user, setuser] = useState("");

  const hand = () => {
    const ur = "http://localhost:8080/source/" + user;
    console.log(ur);
    const con = {
      method: "delete",
      url: ur,
    };
    axios(con)
      .then((resu) => console.log(resu))
      .catch((reu) => console.log(reu));
  };

  const handle = (e) => {
    setuser(e.target.value);
  };
  return (
    <div className="del-co">
      <h1>Delete</h1>
      <h1>Username</h1>
      <input type="text" onChange={handle} />

      <button type="submit" onClick={hand}>
        Submit
      </button>
    </div>
  );
};
export default Deletecross;
