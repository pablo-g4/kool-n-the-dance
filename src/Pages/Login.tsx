import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../db/firebase";
import { logInWithEmailAndPassword, signInWithGoogle } from "../Authentification/authentication";

import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/dashboard");

    }, [user, loading]);

    return (
        <div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control" id="email"
                    aria-describedby="emailHelp"
                    value={email}
                    placeholder="Enter email"
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" onClick={() => logInWithEmailAndPassword(email,password)} className="btn btn-primary">Submit</button>
            <div>
                <Link to="/reset">Forgot Password</Link>
            </div>
            <div>
                Don't have an account? <Link to="/register">Register</Link> now.
            </div>
        </div>
    );
}

export default Login