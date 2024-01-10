import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
let token = localStorage.getItem("token");

function UserDetails() {
  const [image, setImage] = useState();
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();

    if (
      image == null ||
      image == undefined ||
      age == null ||
      age == undefined ||
      name == "" ||
      address == ""
    ) {
      alert("please provide all Fields");
    } else {

      let formData = { photo: image, name, age, address };

      try{
        const result = await axios.post(
          `https://graceful-bull-pullover.cyclic.app/userData/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
    console.log(result);
        const data = result.data.message;
        if (data) {
          alert("data has been added");
          navigate("/preview", { state: data });
        }
      }
      catch(err){
        alert (err.message)
      }

    }

   
  };

  return (
    <div className="App" style={{ textAlign: "center", padding: "20px" }}>
      <form onSubmit={formSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
        <label style={{ display: "block", margin: "10px 0" }}>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            style={{
              marginLeft: "10px",
              padding: "5px",
              marginBottom: "-10px",
            }}
          />
        </label>
        <br />

        <label style={{ display: "block" }}>
          Age:
          <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            style={{ marginLeft: "20px", padding: "5px", marginTop: "-15px" }}
          />
        </label>
        <br />

        <label style={{ display: "block", marginLeft: "-15px" }}>
          Address:
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            style={{ marginLeft: "6px", padding: "5px" }}
          />
        </label>
        <br />

        <label style={{ display: "block", marginLeft: "55px" }}>
          Photo:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            style={{ marginLeft: "10px", marginTop: "5px" }}
          />
        </label>
        <br />

        <button
          type="submit"
          style={{ paddingLeft: "25px", paddingRight: "25px", padding: "8px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserDetails;
