import React from "react";
import axios from "axios";
import { useState } from "react";

const Create = () => {
  const [keyy, setKeyy] = useState("");
  const [valuee, setValuee] = useState("");
  const [categ, setCateg] = useState("");
  const hg = (e) => {
    setCateg(e.target.value);
  };
  const hand = () => {
    console.log(categ);
    console.log(keyy);
    console.log(valuee);
    const con = {
      method: "post",
      url: "http://localhost:8080/api/users",
      data: {
        category: categ,
        keyy: keyy,
        value: valuee,
      },
    };
    axios(con)
      .then((resu) => console.log(resu.data.tok))
      .catch((reu) => console.log(reu));
  };
  const handl = (e) => {
    setKeyy(e.target.value);
  };

  const handle = (e) => {
    setValuee(e.target.value);
  };
  return (
    <div className="cre-co">
      <h1>Create</h1>
      <h2>Category</h2>
      <select onChange={hg}>
        <option value="">Choose</option>
        <option value="gender">Gender</option>
        <option value="state">State</option>
      </select>
      <label for="key">Key</label>
      <input name="key" onChange={handl} />
      <label for="value">Value</label>
      <input name="value" onChange={handle} />
      <button type="submit" onClick={hand}>
        Submit
      </button>
    </div>
  );
};
export default Create;
