import React, { useState } from 'react';

const HookForm = props => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ pwConfirm, setPwConfirm ] = useState("");
    const [ submitted, setSubmitted] = useState(false);

    const [ firstNameError, setFirstNameError ] = useState("");
    const [ lastNameError, setLastNameError ] = useState("");
    const [ emailError, setEmailError ] = useState("");
    const [ passwordError, setPasswordError ] = useState("");
    const [ pwConfirmError, setPwConfirmError ] = useState("");
    const [ pwMatchError, setPwMatchError ] = useState("");

    const createUser = e => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome,", newUser);
        setSubmitted(true);
    }

    const handleFirstName = e => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("*First name must be at least 2 characters long");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = e => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("*Last name must be at least 2 characters long");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = e => {
        setEmail(e.target.value);
        console.log(`Email: ${email}`);
        // if(e.target.value.length < 5) {
        //     setEmailError("*Email must be at least 5 characters long");
        // } else {
        //     setEmailError("");
        // }
    }

    const handlePassword = e => {
        setPassword(e.target.value);
        if(password.length < 1) {
            setPasswordError("*Password must be at least 8 characters long");
        } else {
            setPasswordError("");
        }

        // handlePasswordMatch();
    }

    const handlePwConfirm = e => {
        setPwConfirm(e.target.value);
        if(pwConfirm < 1) {
            setPwConfirmError("*Password must be at least 8 characters long");
        } else {
            setPwConfirmError("");
        }

        // handlePasswordMatch();
    }

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
                    <input type="text" onChange={ handleFirstName } />
                    {
                        firstNameError
                        ? <p>{ firstNameError }</p>
                        : ''
                    }
                </div>

                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ handleLastName } />
                    {
                        lastNameError
                        ? <p>{ lastNameError }</p>
                        : ''
                    }
                </div>

                <div>
                    <label>Email: </label>
                    <input type="text" onChange={ handleEmail } />
                    {
                        emailError
                        ? <p>{ emailError }</p>
                        : ''
                    }
                </div>

                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ handlePassword } />
                    {
                        passwordError
                        ? <p>{ passwordError }</p>
                        : ''
                    }
                    {/* Have to deal with password match message in JSX to check state */}
                    {/* Tried with separate function after onChange function, but the setState is async, and so doing the check there causes a lag */}
                    {
                        password !== pwConfirm
                        ? <p>*Passwords must match!</p>
                        : ""
                    }
                </div>

                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ handlePwConfirm } />
                    {
                        pwConfirmError
                        ? <p>{ pwConfirmError }</p>
                        : ''
                    }
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