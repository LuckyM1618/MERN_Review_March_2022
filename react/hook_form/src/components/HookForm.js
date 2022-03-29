import React, { useState } from 'react';

const HookForm = props => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ pwConfirm, setpwConfirm ] = useState("");
    const [ submitted, setSubmitted] = useState(false);

    const createUser = e => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome,", newUser)
        setSubmitted(true);
    }

    // const formMessage = e => {
    //     if (submitted) {
    //         return "Thank you for submitting your form!";
    //     } else {
    //         return "Welcome! Please submit the form:";
    //     }
    // }

    return (
        <div>
            <form onSubmit={ createUser }>
                {/* <h3>{ formMessage() }</h3> */}
                {
                    submitted
                    ? <h3>Thank you for submitting your form!</h3>
                    : <h3>Welcome! Please submit the form:</h3>
                }
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ e => setFirstName(e.target.value) } />
                </div>

                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ e => setLastName(e.target.value) } />
                </div>

                <div>
                    <label>Email: </label>
                    <input type="text" onChange={ e => setEmail(e.target.value) } />
                </div>

                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ e => setPassword(e.target.value) } />
                </div>

                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ e => setpwConfirm(e.target.value) } />
                </div>

                <input type="submit" value="Submit Form Data" />
            </form>

            <div>
                <h4>Your Form Data</h4>

                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {pwConfirm}</p>
            </div>

        </div>
    );
};

export default HookForm;