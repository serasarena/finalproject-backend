import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { validEmail, validPassword } from './utils'; 
import NavBar from './NavBar.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RegistrationPage = () => {

    const [state, setState] = useState(
        {
            registered: false,
            loading: false,
            errors: 0,
            messages: []
        }
    );

    let firstNameField;
    let lastNameField;
    let emailField;
    let passwordField;

    const registerUser = () => {

        let errors = 0;
        let messages = [];

        if(firstNameField.value.length < 1) {
            errors++;
            messages.push('Please enter a valid first name')
        }
        if(lastNameField.value.length < 1) {
            errors++;
            messages.push('Please enter a valid last name')
        }
        if(!validEmail(emailField.value)) {
            errors++;
            messages.push('Please enter a valid email')
        }
        if(!validPassword(passwordField.value)) {
            errors++;
            messages.push('Please enter a valid password')
        }

        if(errors > 0) {
            setState(
                {
                    ...state,
                    errors: errors,
                    messages: messages,
                }
            )
            return;
        } 
        else {
            setState(
                {
                    ...state,
                    errors: 0,
                    messages: [],
                    loading: true
                }
            )
        }

        fetch('http://localhost:8081/users/register', {
            method: 'POST',
            body: JSON.stringify({
                firstName: firstNameField.value,
                lastName: lastNameField.value,
                email: emailField.value,
                password: passwordField.value
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('jwt')}`
              }
        })
        .then(
            (response)=>response.json()
        )
        .then(
            (json)=> {
                const { message } = json;
                if(message === "User has been saved") {
                    setState(
                        {
                            ...state,
                            registered: true,
                            loading: false
                        }
                    )
                } else {
                    setState(
                        {
                            loading: false
                        }
                    )
                }
            }
        )
    }

    if(state.registered === true) {
        return (<Redirect to="/login"/>)
    }

    else {
        return(
            <div>
                <NavBar />
                <FontAwesomeIcon icon="user-circle"/>
                <h1>Sign up for your free account</h1>
                <p>Get access to exclusive benefits for members only!</p>

                <div className="container">
                    <div className="row">
                        <div className="col-sm" 
                        style={{maxWidth: '400px', margin: '0 auto'}}>
                            <div>
                                <div className="form-group">
                                    <label>
                                        First Name
                                    </label>

                                    <input 
                                    ref={(comp)=>firstNameField = comp}
                                    type="text" 
                                    className="form-control" 
                                    aria-describedby="firstName"/>
                                </div>

                                <div className="form-group">
                                    <label>
                                        Last Name
                                    </label>

                                    <input 
                                    ref={(comp)=>lastNameField = comp}
                                    type="text" 
                                    className="form-control" 
                                    aria-describedby="lastName"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                        Email address
                                    </label>

                                    <input 
                                    ref={(comp)=>emailField = comp}
                                    type="email" 
                                    className="form-control" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp"/>

                                    <small id="emailHelp" className="form-text text-muted">We will never share your information with third parties or anyone else.</small>
                                </div>

                                <div className="form-group">
                                    <label>
                                        Password
                                    </label>

                                    <input 
                                    ref={(comp)=>passwordField = comp}
                                    type="password" 
                                    className="form-control" 
                                    aria-describedby="password"/>
                                </div>

                                <button
                                onClick={registerUser}
                                type="button"
                                className="btn btn-primary">Register
                                </button>
                                <br/><br/>

                                {
                                 state.loading && 
                                 <div className="loader">
                                    <svg className="circular" viewBox="25 25 50 50">
                                        <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
                                    </svg>
                                </div>
                                }

                                {
                                    state.errors > 0 &&
                                    <div class="alert alert-danger" role="alert">
                                        {
                                            state.messages.map(
                                                (message)=><p>{message}</p>
                                            )
                                        }
                                    </div>
                                }
                        </div>
                    </div>
                </div>
              </div>
            </div>
        )
    }
}
export default RegistrationPage;