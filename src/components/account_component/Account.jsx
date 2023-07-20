import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Account.css';

function Account() {
    const [currentEmail, setCurrentEmail] = useState();
    const [currentPassword, setCurrentPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [newConfirmedPassword, setNewConfirmedPassword] = useState();
    const [passwordStatus, setPasswordStatus] = useState();
    const navigate = useNavigate();

    // Function to handle password change process
    function handleChangePassword(e) {
        e.preventDefault();

        if (!currentEmail || !currentPassword || !newPassword || !newConfirmedPassword){
            setPasswordStatus('Check all fields are filled');
            return;
        } else if (currentEmail !== JSON.parse(localStorage.getItem("currentUserEmail")) || currentPassword !== localStorage.getItem("currentUserPassword")) {
            setPasswordStatus('Email or Password is not a match');
            return;
        } else if (newPassword !== newConfirmedPassword) {
            setPasswordStatus('New passwords do not match');
            return;
        } else {
            setPasswordStatus('Password successfully changed');
        }
    }

    return (
        <div id='account'>
            <h1>Account</h1>
            <div>
            <label>
                    Email:
                    <input type='email' onChange={(e) => setCurrentEmail(e.target.value)}></input>
                </label>
                <label>
                    Current Password:
                    <input type='password' onChange={(e) => setCurrentPassword(e.target.value)}></input>
                </label>
                <label>
                    New Password:
                    <input type='password' onChange={(e) => setNewPassword(e.target.value)}></input>
                </label>
                <label>
                    Confirm New Password:
                    <input type='password' onChange={(e) => setNewConfirmedPassword(e.target.value)}></input>
                </label>
            </div>
            <p>{ passwordStatus }</p>
            <div><button onClick={handleChangePassword}>Change Password</button></div>
            <div><button onClick={() => navigate(-1)}>Back</button></div>
        </div>
    )
}

export default Account;