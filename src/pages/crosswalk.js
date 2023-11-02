import React from "react";
import axios from "axios";
import { useState } from "react";
const Cross = () => {
  let keyy = "";
  const [valuee, setValuee] = useState("");
  const [categ, setCateg] = useState("");
  const [usern, setUsern] = useState("");
  const [postData, setPostData] = useState([]);
  const hg = (e) => {
    setCateg(e.target.value);
  };
  const hand = () => {
    if (categ === "gender") {
      if (valuee.split(" ").join("") === "male") {
        console.log("in");
        keyy = "M";
        setValuee("Male");
      } else if (valuee.split(" ").join("") === "female") {
        keyy = "F";
        setValuee("Female");
      } else if (
        valuee.split(" ").join("") === "transgender" ||
        valuee.split(" ").join("") === "trans"
      ) {
        keyy = "T";
        setValuee("Trans Gender");
      }
    } else if (categ === "state") {
      switch (valuee.split(" ").join("").toLowerCase()) {
        case "andamanandnicobarislands":
          keyy = "AN";
          setValuee("Andaman and Nicobar Islands");
          break;
        case "andhrapradesh":
          keyy = "AP";
          setValuee("Andhra Pradesh");
          break;
        case "arunachalpradesh":
          keyy = "AR";
          setValuee("Arunachal Pradesh");
          break;
        case "assam":
          keyy = "AS";
          setValuee("Assam");
          break;
        case "bihar":
          keyy = "BR";
          setValuee("Bihar");
          break;
        case "chandigarh":
          keyy = "CH";
          setValuee("Chandigarh");
          break;
        case "chhattisgarh":
          keyy = "CG";
          setValuee("Chhattisgarh");
          break;
        case "dadraandnagarhavelianddamananddiu":
          keyy = "DN";
          setValuee("Dadra and Nagar Haveli and Daman and Diu");
          break;
        case "delhi":
          keyy = "DL";
          setValuee("Delhi");
          break;
        case "goa":
          keyy = "GA";
          setValuee("Goa");
          break;
        case "gujarat":
          keyy = "GJ";
          setValuee("Gujarat");
          break;
        case "haryana":
          keyy = "HR";
          setValuee("Haryana");
          break;
        case "himachalpradesh":
          keyy = "HP";
          setValuee("Himachal Pradesh");
          break;
        case "jammuandkashmir":
          keyy = "JK";
          setValuee("Jammu and Kashmir");
          break;
        case "jharkhand":
          keyy = "JH";
          setValuee("Jharkhand");
          break;
        case "karnataka":
          keyy = "KA";
          setValuee("Karnataka");
          break;
        case "kerala":
          keyy = "KL";
          setValuee("Kerala");
          break;
        case "ladakh":
          keyy = "LA";
          setValuee("Ladakh");
          break;
        case "lakshadweep":
          keyy = "LD";
          setValuee("Lakshadweep");
          break;
        case "madhyapradesh":
          keyy = "MP";
          setValuee("Madhya Pradesh");
          break;
        case "maharashtra":
          keyy = "MH";
          setValuee("Maharashtra");
          break;
        case "manipur":
          keyy = "MN";
          setValuee("Manipur");
          break;
        case "meghalaya":
          keyy = "ML";
          setValuee("Meghalaya");
          break;
        case "mizoram":
          keyy = "MZ";
          setValuee("Mizoram");
          break;
        case "nagaland":
          keyy = "NL";
          setValuee("Nagaland");
          break;
        case "odisha":
          keyy = "OD";
          setValuee("Odisha");
          break;
        case "puducherry":
          keyy = "PY";
          setValuee("Puducherry");
          break;
        case "punjab":
          keyy = "PB";
          setValuee("Punjab");
          break;
        case "rajasthan":
          keyy = "RJ";
          setValuee("Rajasthan");
          break;
        case "sikkim":
          keyy = "SK";
          setValuee("Sikkim");
          break;
        case "tamilnadu":
          keyy = "TN";
          setValuee("Tamil Nadu");
          break;
        case "telangana":
          keyy = "TS";
          setValuee("Telangana");
          break;
        case "tripura":
          keyy = "TR";
          setValuee("Tripura");
          break;
        case "uttarakhand":
          keyy = "UK";
          setValuee("Uttarakhand");
          break;
        case "uttarpradesh":
          keyy = "UP";
          setValuee("Uttar Pradesh");
          break;
        case "westbengal":
          keyy = "WB";
          setValuee("West Bengal");
          break;
        default:
          // Handle the case where the state name is not recognized.
          break;
      }
    }
    console.log(categ);
    console.log(keyy);
    console.log(valuee);

    const con = {
      method: "post",
      url: "http://localhost:8080/cross/create",
      data: {
        category: categ,
        keyy: keyy,
        value: valuee,
        username: usern,
      },
    };
    axios(con)
      .then((resu) => console.log(resu.data.tok))
      .catch((reu) => console.log(reu));
  };
  const handl = (e) => {
    keyy(e.target.value);
  };
  const handleUser = (e) => {
    setUsern(e.target.value);
  };

  const handle = (e) => {
    setValuee(e.target.value.toLowerCase());
  };
  const handleGet = (e) => {
    if (categ === "all") {
      const apiUrl = "http://localhost:8080/cross/getall";

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
      const apiUrl = "http://localhost:8080/cross/getusers/" + categ;

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

  return (
    <div className="kop">
      <div className="read-container">
        <h1 className="header">Read</h1>
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
      <div className="cre-co">
        <h1>Create-crosswalk</h1>
        <input
          type="text"
          placeholder="Enter your Username"
          onChange={handleUser}
        />
        <h1>Category</h1>
        <select onChange={hg}>
          <option value="">Choose</option>
          <option value="gender">Gender</option>
          <option value="state">State</option>
        </select>

        <label for="value">Value</label>
        <input name="value" onChange={handle} />
        <button type="submit" onClick={hand}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default Cross;
