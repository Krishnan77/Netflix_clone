import React, { } from 'react'
import "./SignUpScreen.css"
//import {auth} from "./firebase"

function SignUpScreen() {

   /* const emailRef = useRef(null);
    const passwordRef =useRef(null);

    const register = (e) => {
        e.preventDefault();

        auth.createUserwithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
        ).then(() => {

        }).catch(error => {
        alert(error.message);
        });
    }

    const signIn =(e)=>{
        e.preventDefault();
    };*/
    return (
        <div className="signupScreen">
            <form>
                <h1>
                    Sign In
                </h1>
                <input  placeholder="Email" type="email"/>
                <input placeholder="Password" type="password"/>
                <button type="submit" >Sign In</button>
                <h4>
                    <span className="signupScreen_grey">New to Netflix?</span>
                        <span className="signupScreen_link"> Signup now.</span>
                        </h4>
            </form>
            
        </div>
    )
}

export default SignUpScreen
