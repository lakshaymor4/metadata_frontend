import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ReadCross = () => {
  const navigate = useNavigate();
  const [valuee, setValuee] = useState("");
  const [categ, setCateg] = useState("");
  const [usern, setUsern] = useState("");
  const [postData, setPostData] = useState([]);
  const [user, Setuser] = useState("");
  const handleGet = (e) => {
    let apiUrl;
    if (categ === "all") {
      apiUrl = "http://localhost:8080/cross/getall";

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
      if (categ != "") {
        apiUrl = "http://localhost:8080/source/" + user + "/metadata/" + categ;
      } else {
        apiUrl = "http://localhost:8080/source/" + user;
      }

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
  const hng = (e) => {
    Setuser(e.target.value);
  };
  const hg = (e) => {
    setCateg(e.target.value);
  };

  return (
    <div className="read-container">
      <h1 className="header">Read</h1>
      <h1 className="header">Username</h1>
      <input type="text" onChange={hng} />
      <h1 className="header">Category</h1>
      <select onChange={hg} className="category-select">
        <option value="">Choose</option>
        <option value="all">ALL</option>
        <option value="gender">Gender</option>
        <option value="state">State</option>
      </select>

      <button type="submit" onClick={handleGet} className="submit-button">
        Submit
      </button>

      {postData.length > 0 && (
        <div className="result-container">
          <h2 className="result-header">Result:</h2>
          <ul className="result-list">
            {postData.map((item, index) => (
              <li key={index} className="result-item">
                <p>Username:{item.username}</p>
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

export default ReadCross;
