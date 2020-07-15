import React, { useState } from 'react';

const CounterButton = () => {

    const [state, setState] = useState(
        {
            label: 0,
        }
    );

    const countUp = () => {
       let newLabel = state.label + 1;
       setState(
           {
               label: newLabel
           }
       )
    }

    return (
        <button 
            onClick={countUp}
            className="btn btn-primary">
                {state.label}
        </button>
    )
}

export default CounterButton;