import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: "" });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(credentials);
            navigate("/project/account");
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <div className="w-25">
            <h1>Signup</h1>
            {error && <div>{error}</div>}
            <input className="form-control mb-2"
                value={credentials.username}
                onChange={(e) => setCredentials({
                ...credentials,
                username: e.target.value })} />
            <input className="form-control mb-3" type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({
                ...credentials,
                password: e.target.value })} />
            <button className="btn btn-primary w-100" onClick={signup}>
                Signup
            </button>
        </div>
    );
}
export default Signup;