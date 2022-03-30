import React, { useReducer } from 'react';

const initialState = {
    name: '',
    email: ''
}

function reducer(state,action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }

    return (
        <div>
            {JSON.stringify(state)}
            <div>
                <label>Name: </label>
                <input name="name" onChange={handleChange} />
            </div>

            <div>
                <label>Email: </label>
                <input name="email" onChange={handleChange} />
            </div>
        </div>
    );
}