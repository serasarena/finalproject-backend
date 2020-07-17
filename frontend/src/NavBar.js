import React, { useContext } from 'react';
import AppContext from './AppContext';
import { Link } from 'react-router-dom';
import barbershopbeautysalonlogo from './barbershopbeautysalonlogo.svg';

const NavBar = () => {

    const [globalState, setGlobalState] = useContext(AppContext);

    const logOut = () => {
        setGlobalState(
            {
                ...globalState,
                loggedIn: false
            }
        );

        localStorage.clear();
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <img src={barbershopbeautysalonlogo} width="30" height="30" 
                className="d-inline-block align-top" 
                alt="" 
                loading="lazy"/>
                Cutting Edge
            </Link>

            <div style={{display: 'flex'}}>
                {
                    globalState.loggedIn === false && 
                    <Link
                    to="/login"
                    className="btn btn-primary">
                        Log in / Register
                    </Link>
                }

                {
                    globalState.loggedIn === true && 
                    <button onClick={logOut}
                    className="btn btn-primary">
                        Log Out
                    </button>
                }
            </div>
        </nav>
    )
}

export default NavBar;