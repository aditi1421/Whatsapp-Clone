import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";


function Login() {
    const [{ user }, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) =>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src="https://www.freepnglogos.com/uploads/whatsapp-logo-app-png-4.png"
                    alt=""
                />
            <div className="login__text">
                <h1>Sign in to Whatsapp</h1>
            </div>
            
            <Button onClick={signIn}>
                Sign In With Google
            </Button>
           </div>
        </div>
    );
}

export default Login;
