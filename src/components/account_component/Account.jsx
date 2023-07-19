import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Account() {
    const [currentPassword, setCurrentPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [newConfirmedPassword, setNewConfirmedPassword] = useState();
    const [passwordStatus, setPasswordStatus] = useState();
    const navigate = useNavigate();

    function changePassword(e) {
        e.preventDefault();
        if (newPassword !== newConfirmedPassword) {
            setPasswordStatus('Password does not match');
            return;
        } else {
            console.log("match");
        }
    }

    return (
        <div>
            <h1>Account</h1>
            <div>
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
            <button onClick={changePassword}>Chnage Password</button>
            <p>{ passwordStatus }</p>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}

export default Account;