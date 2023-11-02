import React, { useState } from "react";
import axios from "axios";

const Read = () => {
  const [categ, setCateg] = useState("");
  const [postData, setPostData] = useState([]);

  const hg = (e) => {
    setCateg(e.target.value);
  };

  const hand = () => {
    if (categ === "all") {
      const apiUrl = "http://localhost:8080/api/getall";

      axios
        .get(apiUrl)
        .then((response) => {
          setPostData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      console.log(categ);
      const apiUrl = "http://localhost:8080/api/getusers/" + categ;

      axios
        .get(apiUrl)
        .then((response) => {
          setPostData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };

  const hj = () => {
    console.log(postData);
  };

  return (
    <div className="read-container">
      <h1 className="header">Read</h1>
      <h1 className="header">Category</h1>
      <select onChange={hg} className="category-select">
        <option value="">Choose</option>
        <option value="all">ALL</option>
        <option value="gender">Gender</option>
        <option value="state">State</option>
      </select>

      <button type="submit" onClick={hand} className="submit-button">
        Submit
      </button>

      {postData.length > 0 && (
        <div className="result-container">
          <h2 className="result-header">Result:</h2>
          <ul className="result-list">
            {postData.map((item, index) => (
              <li key={index} className="result-item">
                <p>Category: {item.category}</p>
                <p>Value: {item.value}</p>
                <p>Key: {item.keyy}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Read;
