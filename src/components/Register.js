import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Card } from "../styles/CardStyles";
import { CTAReg } from "./CTA";

export default function Register(props) {

    const [form, setForm] = React.useState({ username: "", password: "" });

    const handleChanges = e => {
        setForm({...form, [e.target.name]: e.target.value}); 
    }

    const login = e => {
        e.preventDefault(); 
        axiosWithAuth()
            .post("/api/auth/register", form) 
            .then(res => {
                console.log("login", res);
                localStorage.setItem("token", res.data.payload);
                props.history.push("/login");
            })
            .catch(error => {
                console.log("err", error.response.data.message)
                alert(error.response.data.message)
                setForm({ username: "", password: "" }); 
         });
    };

    return (
        <Card>
             <Card>
        <CTAReg />
      </Card>
      <Card>
            <h2>REGISTER</h2>
            
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
                <button className='btn bg-primary' type="submit">SUBMIT</button>
                <div>
            <a href="/login">or Log In</a>
        </div>
            </form>
            
            </Card>
        </Card>
    )
}