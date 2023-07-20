import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewUser.css';

function NewUser() {
    const [emailValue, setEmailValue] = useState();
    const [passwordValue, setPasswordValue] = useState();
    const [confirmedPasswordValue, setConfirmedPasswordValue] = useState();
    const [accountStatus, setAccountStatus] = useState();
    const navigate = useNavigate();

    // Function to handle new user creation
    function handleUserCreation(e) {
        e.preventDefault();
        setAccountStatus();

        if (passwordValue !== confirmedPasswordValue) {
            setAccountStatus('Password does not match');
            return;
        }

        const options = {
            method: 'POST',
            headers: {
              accept: 'application/json',
              'content-type': 'application/json',
              authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTE3MGJhOWFkMWM5ZjkyNjQ3Y2FjNGU3NGFiODY0YmI1ZWNmNTQ1ZjZiNDYwMTJiNjRlNGQ4ZTUwMDQ1NDVkZDBlOGM3NDM2OTI2N2ZiMjQiLCJpYXQiOjE2ODkzNDQ4MTQuNTg3NzA3LCJuYmYiOjE2ODkzNDQ4MTQuNTg3NzA5OSwiZXhwIjoxNzIwOTY3MjE0LjU2Nzg0NjEsInN1YiI6IjRmMzQ1ZmIwLWVjMTYtNDJhYy1iNjZjLWU2MjNmOGY2Mjg0OCIsInNjb3BlcyI6W119.c4ptzlZzUzTtmv_jYa2ynqhYpR4PWC2U3iNB_5zqQDAC1GIUEz_uUWqM9wRjKxwR3fJhH8FqyfLoYp2d4myIqOnNMzTw7mpwzxkiqIYvbsXB8K0KL-CmxbvW2h3bZkBQVudigwETuYo09VNF789sFpPryytxe0IN4AdexFI3ZgEkmJV4nwOaldpCORGtHWUWCzoV-UQpy3vwZPBnkGEpd_nDnBY42mNyqpOywTnIVC-ODT-0ojgrKR1aKWelQVWm0TJq-hLszlKU2suEaHB0EgGgapwk0yp9JLIDjAPtLX6Wd04p7onjGGzOlwuwFs1WgivVFbJY_XMxzGAoKFVBtzXb7TL4RhF2dHSRClqsUUbupYhpPlQmzsm5Y17aSY4DKnaff0A__PT1jW7axVR9OrInedvYY75xmODtavZ5t2t5nR6F709AohW8VLGzzgrCwblCsJ_3YbA6kIqRypnRvMQpNJQ06Ny0wNy2VExUInXcCwPQ1aiGE8cbHFbioSXhRu0tWmvqdkOOHxJNQ-XyNwW0wtTq5dh6Qvwdofoa96ImSdR2YPf6ZsIeNN6R2n2kzllYu8JICJ5OdtE4GiKpD5bSyakyjhyNq666ZTNH7W4DpET6X5YJZjj11tLlag15sP2ihpJHpW6dfBqSB18w_tmZlNI3iWaschVj7aHtbpE'
            },
            body: JSON.stringify({
              roles: [1],
              data: {newKey: 'New Value'},
              email: emailValue,
              password: passwordValue,
              c_password: confirmedPasswordValue
            })
        };
          
        fetch('https://laravel-api.albrecht.uk.com/api/users', options)
            .then(response => response.json())
            .then(response => {
                if (response.code === 200) {
                    setAccountStatus('Account Created');
                } else if (response.email) {
                    setAccountStatus('The email has already been taken');
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div id='register'>
            <form onSubmit={handleUserCreation}>
                <h1>Create an account</h1>
                <label>
                Email: 
                <input type='email' placeholder='Email' onChange={(e) => setEmailValue(e.target.value)} required></input>
                </label>
                <label>
                Password:
                <input type='password' placeholder='Password' onChange={(e) => setPasswordValue(e.target.value)} required></input>
                </label>
                <label>
                Confirm Password:
                <input type='password' placeholder='Confirm Password' onChange={(e) => setConfirmedPasswordValue(e.target.value)} required></input>
                </label>
                <div><input type='submit' value='Submit'/></div>
            </form>
            <p>{accountStatus}</p>
            <div><button onClick={() => navigate(-1)}>Back to login</button></div>
        </div>
    )
}

export default NewUser;