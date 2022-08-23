import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { doUserSignup } from '../store/actions/UserActions';
import { emailValidator, passwordValidator,} from "../lib/validation"

function SignUp() {


    const [validation, setValidation] = useState(false)
    const [validationEmail, setValidationEmail] = useState("");
    const [validationPassword, setValidationPassword] = useState("");
    const [formErrors, setFormErrors] = useState({});

    const [state, setState] = useState({
        name: '',
        email: '',
      
        username: '',
        password: ''
    });
    const dispatch = useDispatch();


    const doSignin = () => {

        let errors = {};
        if (!state.username) {

            errors['usernameError'] = "username is required"

        }

        if (!state.password) {

            errors['passwordError'] = "password is required";
        }
        if (!state.name) {
            errors['nameError'] = "Name is Required"
        }
        if (!state.email) {
            errors['emailError'] = "Email is required"
        }
        
        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
            const payload = {
                name: state.name,
                email: state.email,
                username: state.username,
                password: state.password
            }
            dispatch(doUserSignup(payload))

        }

    }
    const handleSignUpdata = (e) => {

        if (e.target.name === "email") {
            let ValidateEmail = emailValidator(e.target.value)
            setValidationEmail(ValidateEmail)

        }
        if (e.target.name === "password") {
            let ValidatePassword = passwordValidator(e.target.value)
            setValidationPassword(ValidatePassword)
            console.log("ValidateEmail", ValidatePassword)
        }
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
        checkIfvalidate()

    }
    const checkIfvalidate = () => {
        let valid = false;
        valid = state.name &&
            state.email &&
            state.password &&
            state.username
            ? true : false
        setValidation(valid)

    }
    return (
        <div className="container " style={{ display: "flex", justifyContent: "center", height: "80vh", alignItems: "center" }}>


            <div className='main_divv'>

                <div className="form-group">
                    <label htmlFor='username'>Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name" value={state.name}
                        onChange={e => handleSignUpdata(e)}
                        placeholder="Enter Your Name" />
                          {
                                  formErrors.nameError &&

                                  <div style={{ color: 'red' }}>{formErrors.nameError}</div>
                            }

                </div>

                <div className="form-group">
                    <label htmlFor='username'>Email  </label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={e => handleSignUpdata(e)}
                        placeholder="Enter Email" />
                          {
                                  formErrors.emailError &&

                                  <div style={{ color: 'red' }}>{formErrors.emailError}</div>
                            }
                    {validationEmail ? "" : <div style={{ color: "red", fontSize: "12px" }}>Enter Valid Email</div>}

                </div>

                {/* <div className="form-group">
                    <label htmlFor='username'>Phone Number  </label>
                    <input
                        type="number"
                        className="form-control"
                        name="phonenumber"

                        onChange={e => handleSignUpdata(e)}
                        placeholder="Enter Phone Number"
                        onKeyPress={NumberValidator} />
                          {
                                  formErrors.mobileError &&

                                  <div style={{ color: 'red' }}>{formErrors.mobileError}</div>
                            }

                </div> */}



                <div className="form-group">
                    <label htmlFor='username'>User Name </label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        onChange={e => handleSignUpdata(e)}
                        placeholder="Enter username" />
                          {
                                  formErrors.usernameError &&

                                  <div style={{ color: 'red' }}>{formErrors.usernameError}</div>
                            }

                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={e => handleSignUpdata(e)}
                        placeholder="Enter Password" />
                          {
                                  formErrors.passwordError &&

                                  <div style={{ color: 'red' }}>{formErrors.passwordError}</div>
                            }
                    {validationPassword ? "" : <div style={{ color: "red", fontSize: "12px" }}>Password must have  uppercase,  lowercase,  digit,  special character  ,length should be minimum 8 character</div>}
                </div>

                <div>
                    <button onClick={doSignin} className="btn btn-primary">SignUp</button>
                </div>

            </div>



        </div>




    )
}

export default SignUp;