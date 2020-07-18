import React, { useContext, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import AppContext from './AppContext';
import NavBar from './NavBar.js';
import './LoginPage.css';

const LoginPage = () => {

    let emailField;
    let passwordField;

    const [globalState, setGlobalState] = useContext(AppContext);

    const [state, setState] = useState(
        {
            loading: false
        }
    )

    const loginUser = () => {

        setState({...state, loading: true});

        fetch(`${process.env.REACT_APP_API_URL}users/login`, 
            {
                method: 'POST',
                body: JSON.stringify({
                    email: emailField.value,
                    password: passwordField.value
                }),
                headers: {"Content-Type": "application/json"}
            }
        )
        .then(
            (result) => result.json()
        )
        .then (
            (json) => {
                const { message, jsonwebtoken } = json;

                if(jsonwebtoken) {
                    setGlobalState(
                        {
                            ...globalState,
                            loggedIn: true
                        }
                    )

                    localStorage.setItem('jwt', jsonwebtoken);

                    setState({...state, loading: false})
                } else {
                    alert(message);
                }
            }
        )
    }

    if(globalState.loggedIn === true) {
        return(<Redirect to="/"/>)
    }

    else {
        return(
            <div>
                <NavBar />
                <h1>Create an Account</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-sm" 
                        style={{maxWidth: '400px', margin: '0 auto'}}>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                        Email address
                                    </label>

                                    <input 
                                    ref={ (comp)=> emailField = comp}
                                    type="email" 
                                    className="form-control" 
                                    id="exampleInputEmail1" aria-describedby="emailHelp"/>

                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>

                                    <input 
                                    ref={(comp)=> passwordField = comp }
                                    type="password" 
                                    className="form-control" 
                                    id="exampleInputPassword1"/>

                                </div>

                                <button 
                                onClick={loginUser}
                                type="button"
                                className="btn btn-primary">Login</button>


                                <p><br/>If you're not a registered user, click <Link to="/register">here</Link> to create an account</p>

                                {
                                 state.loading && 
                                 <div className="loader">
                                    <svg className="circular" viewBox="25 25 50 50">
                                        <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
                                    </svg>
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

export default LoginPage;