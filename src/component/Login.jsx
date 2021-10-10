import axios from "axios";
import React, { useState } from "react";
import * as TokenStorage from "../data/storage";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleEmail = (event) => {
    setEmail(event.currentTarget.value);
    event.value = "";
  };

  const onHandlePassword = (event) => {
    setPassword(event.currentTarget.value);
    event.value = "";
  };

  const onHandleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await axios.post("http://localhost:3001/token/login", {
      email,
      password,
    });
    console.log(data.token);
    TokenStorage.setToken(data.token);
    props.history.push("/");
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={email} onChange={onHandleEmail} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onHandlePassword}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Login;
