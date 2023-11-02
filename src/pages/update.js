import React from "react";
import axios from "axios";
import { useState } from "react";

const Update = ()=>{
    const [keyy , setKeyy] = useState("")
    const [valuee , setValuee] = useState("")
    const[categ , setCateg] = useState("")
    const hg = (e)=>{
        setCateg(e.target.value)
    }
    const hand = ()=>{
        console.log(  categ)
        console.log(keyy)
        console.log(valuee)
        const ur = "http://localhost:8080/api/update/"+keyy
    const con = {
        method:"put",
        url:ur,
        data:{
            category:categ,
            keyy:keyy,
            value:valuee
        }
    }
    axios(con)
      .then((resu) => console.log(resu.data.tok))
      .catch((reu) => console.log(reu));
    }
    const handl = (e)=>{
        setKeyy(e.target.value)
    }

    const handle = (e)=>{
    setValuee(e.target.value)
    }
    return(
        <div className="up-co">
            <h1>Update</h1>
        <h1>Category</h1>
        <select onChange={hg}>
            <option value="">Choose</option>
            <option value="gender">Gender</option>
            <option value="state">State</option>
        </select>
        <label for="key" >Key</label>
        <input name="key" onChange={handl} />
        <label for="value" >Value</label>
        <input name="value" onChange={handle} />
        <button type="submit" onClick={hand}>Submit</button>
        </div>
    )
}
export default Update