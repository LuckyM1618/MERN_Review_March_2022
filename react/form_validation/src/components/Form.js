import React, { useReducer } from 'react';

const initialState = {
    firstName: {
        value: "",
        error: null
    },
    lastName: {
        value: "",
        error: null
    },
    email: {
        value: "",
        error: null
    }
}

const reducer = (state, action) => {
    return {
        ...state,
        [action.type]: {value: action.payload}
    };
}

const Form = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = e => {
        const { name, value } = e.target;
        dispatch ({
            type: name,
            payload: value
        });
    }

    const createUser = e => {
        e.preventDefault();
        const newUser = {
            firstName: state.firstName.value,
            lastName: state.lastName.value,
            email: state.email.value
        };
        console.log("Welcome,", newUser);
    }

    return (
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label>
                    <input type="text" name="firstName" value={state.firstName.value} onChange={ handleChange } />
                </div>
                {
                    state.firstName.error !== null && (
                        <p className="error">{state.firstName.error}</p>
                )}

                <div>
                    <label>Last Name: </label>
                    <input type="text" name="lastName" value={state.lastName.value} onChange={ handleChange } />
                </div>

                <div>
                    <label>Email: </label>
                    <input type="text" name="email" value={state.email.value} onChange={ handleChange } />
                </div>

                <input type="submit" value="Submit Form Data" />
            </form>

            <div>
                <h4>Your Form Data</h4>

                <p>First Name: {state.firstName.value}</p>
                <p>Last Name: {state.lastName.value}</p>
                <p>Email: {state.email.value}</p>
            </div>

        </div>
    );
};

export default Form;