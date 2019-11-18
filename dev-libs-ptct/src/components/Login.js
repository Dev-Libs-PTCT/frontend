import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Card } from "../styles/CardStyles";
import CTA from "./CTA";

const Login = props => {
  const [form, setForm] = React.useState({ username: "", password: "" });

  const handleChanges = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/login", form)
      .then(res => {
        console.log("LOGIN", res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.userId);
        props.history.push("/profile");
      })
      .catch(error => {
        console.log("LOGINERROR", error.response.data.message);
        alert(error.response.data.message);
        setForm({ username: "", password: "" });
      });
  };

  return (
    <Card>
      <Card>
        <CTA />
      </Card>
    <Card>
      <h2>LOGIN</h2>
        <form onSubmit={login}>
          <label>Username</label>
          <input
            required
            type="text"
            placeholder="username"
            name="username"
            onChange={handleChanges}
            value={form.username}
          />
          <label>Password</label>
          <input
            required
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChanges}
            value={form.password}
          />
          <button className='btn bg-primary' type="submit">Log In</button>
          <div>
            <a href="/register">or Create an Account</a>
        </div>
        </form>
    </Card>
  </Card>
  );
};

export default Login;
