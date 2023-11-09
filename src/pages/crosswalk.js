import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Cross = () => {
  const navigate = useNavigate();
  const handle = (e) => {
    const val = e.target.value;
    if (val === "create") {
      navigate("/cross/create");
    } else if (val === "read") {
      navigate("/cross/read");
    } else if (val === "update") {
      navigate("/cross/update");
    } else if (val === "delete") {
      navigate("/cross/delete");
    }
  };
  return (
    <>
      <h1>CROSSWALK</h1>
      <div className="crud-co">
        <select onChange={handle}>
          <option value="">Choose</option>
          <option value="create">Create</option>
          <option value="read">Read</option>
          <option value="update">Update</option>
          <option value="delete">Delete</option>
        </select>
      </div>
    </>
  );
};
export default Cross;
