import React from 'react';
import './Login.css';


function Login() {
    return (
        <div className="Login">
            <p>Login to access the full dashboard</p>
            <label htmlFor="email">Email:
                <input id="email" name="email" type="email" required />
            </label>
            <label htmlFor="password">Password:
                <input id="new-password" name="new-password" type="password" pattern="[a-z0-5]{8,}" required />
            </label>
            <button type="button"> OK </button>
        </div>
    );}

export default Login;
