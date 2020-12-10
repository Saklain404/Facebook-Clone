import React from 'react';
import './Login.css';
import facebook from './img/facebook.png';
import facebook_txt from './img/facebook_txt.png';
import Button from '@material-ui/core/Button';
import { auth, provider } from "./firebase";

function Login() {
    const SigIn = () => {
        // SignIn......
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => alert(error.message));


    };


return (
    <div className='login'>
        <div className='login__logo'>
            <img src={facebook} />
            <img src={facebook_txt} />

        </div>
        <div className='logo__txt'>
            <Button type='submit' onClick={SigIn}> Sign In</Button>
        </div>

    </div>
)
}


export default Login;
