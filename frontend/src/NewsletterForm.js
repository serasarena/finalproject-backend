import React, { useState } from 'react';

const NewsletterForm = () => {

    const [state, setState] = useState(
        {
            registered: false
        }
    )
    let inputField;

    const registerEmail = () => {
        fetch('http://localhost:8081/emails/register', 
            {
                method: 'POST',
                body: JSON.stringify({email: inputField.value}),
                headers: {"Content-Type": "application/json"}
            }
        )
        .then(
            (result) => result.json()
        )
        .then (
            (json) => {
                console.log('response from backend', json);
                setState(
                    {
                        registered: true
                    }
                )
            }
        )
    }

    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" 
                    id="the-field"
                    className="form-control" 
                    placeholder="Recipient's email" 
                    aria-label="Recipient's email" 
                    aria-describedby="button-addon2" 
                    ref={ 
                        (comp) => inputField = comp
                    }
                />
                <div className="input-group-append">
                    <button 
                        className="btn btn-outline-secondary" 
                        type="button" 
                        id="button-addon2"
                        onClick={registerEmail}
                    >Button</button>
                </div>
            </div>
            { 
                state.registered &&
                <div className="alert alert-success" role="alert">
                    You have successfully registered!
                </div> 
            }
        </div>
    )
};

export default NewsletterForm;