import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ERoute from "../ERoute";

export default function LoginComponent() {
  const history = useHistory();

  const handleLogin = () => {
    history.push(ERoute.HOME);
  };

  return (
    <>
      <div>
        <label>Email address</label>
        <input type="text" name="email" placeholder="Enter email" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" name="password" placeholder="Password" />
      </div>

      <button type="submit" onClick={() => handleLogin()}>
        Submit
      </button>
    </>
  );
}
