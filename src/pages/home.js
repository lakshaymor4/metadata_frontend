import React from "react";
import { useNavigate } from "react-router-dom";

const Hom = () => {
  const navigate = useNavigate();
  const hand = (e) => {
    if (e.target.value === "CROSS") {
      navigate("/cross");
    } else if (e.target.value === "CRUD") {
      navigate("/crud");
    }
  };
  return (
    <>
      <h1>Metadata Management</h1>
      <div className="ho-co">
        <select onChange={hand}>
          <option value="">Choose</option>
          <option value="CRUD">CRUD</option>
          <option value="CROSS">CROSS</option>
        </select>
      </div>
    </>
  );
};
export default Hom;
