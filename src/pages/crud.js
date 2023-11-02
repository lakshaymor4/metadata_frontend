import React from "react";
import { useNavigate } from "react-router-dom";

const CRUD = () => {
  const navigate = useNavigate();
  const handle = (e) => {
    const val = e.target.value;
    if (val === "create") {
      navigate("/crud/create");
    } else if (val === "read") {
      navigate("/crud/read");
    } else if (val === "update") {
      navigate("/crud/update");
    } else if (val === "delete") {
      navigate("/crud/delete");
    }
  };
  return (
    <>
      <h1>CRUD</h1>
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
export default CRUD;
