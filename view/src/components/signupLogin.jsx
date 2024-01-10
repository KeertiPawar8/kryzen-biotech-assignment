import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const registerFormSubmit = async (e) => {
    e.preventDefault();
    let formData = JSON.stringify({
      username: registerUsername,
      password: registerPassword,
    });
    try {
      const result = await axios.post(
        `https://graceful-bull-pullover.cyclic.app/user/register`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(result.data);
      alert(result.data.message);
      setRegisterUsername("");
      setRegisterPassword("");
    } catch (err) {
      console.log(err.message);
    }
  };

  const loginFormSubmit = async (e) => {
    e.preventDefault();
    let formData = JSON.stringify({
      username: loginUsername,
      password: loginPassword,
    });
    const response = await axios.post(
      `https://graceful-bull-pullover.cyclic.app/user/login`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setLoginUsername("");
    setLoginPassword("");

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      alert(response.data.message);
      navigate("/userDetails");
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div>
      <div>
        <h2>Register</h2>
        <form onSubmit={registerFormSubmit}>
          <div>
            <label style={{ display: 'inline-block', margin: '10px 0' }}>Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={registerUsername}
              onChange={(e) => {
                setRegisterUsername(e.target.value);
              }}
              style= {{ marginLeft: '10px', padding: '4px',marginBottom:"-10px" }}
            />
          </div>
          <div>
            <label style={{ display: 'inline-block', margin: '10px 0' }}>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={registerPassword}
              onChange={(e) => {
                setRegisterPassword(e.target.value);
              }}
              style= {{ marginLeft: '13px', padding: '4px',marginBottom:"-10px" }}
            />
          </div>
          <div>
            <button type="submit" style = {{paddingLeft:"25px",paddingRight:"25px", padding:"8px"}}>Register</button>
          </div>
        </form>
      </div>

      <div>
        <h2> Login </h2>
        <form onSubmit={loginFormSubmit}>
          <div>
            <label style={{ display: 'inline-block', margin: '10px 0' }}>Username:</label>
            <input
              type="text"
              id="Loginusername"
              name="username"
              value={loginUsername}
              onChange={(e) => {
                setLoginUsername(e.target.value);
              }}
              style= {{ marginLeft: '13px', padding: '4px',marginBottom:"-10px" }}
            />
          </div>
          <div>
            <label style={{ display: 'inline-block', margin: '10px 0' }}>Password:</label>
            <input
              type="password"
              id="Loginpassword"
              name="password"
              value={loginPassword}
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
              style= {{ marginLeft: '13px', padding: '4px',marginBottom:"-10px" }}
            />
          </div>
          <div>
            <button type="submit"
            style = {{paddingLeft:"25px",paddingRight:"25px", padding:"8px"}}
            >Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
