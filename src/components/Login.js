import React, {useState} from 'react';
import "../css/Login.css";
import { auth, provider } from '../firebase';

function Login() {
    const signInWithGoogle = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }

    const logIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch((error) => alert(error.message));

    }

    const signIn = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).catch((error) => alert(error.message));
    }


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="login">
            <div>
                <img src="https://www.logo.wine/a/logo/Discord_(software)/Discord_(software)-Logo.wine.svg" alt="discord logo" className="login__logo"/>
            </div>
            <div className="login__formContainer">
                <h2>Welcome back!</h2>
                <p className="login__info">Log in with your email and start talking</p>
                <form>
                    <h5>Email:</h5>
                    <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <h5>Password: </h5>
                    <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button className="login__btn" onClick={logIn}>Log in</button>
                    <p className="login__info">Dont have an account? Sign in!</p>
                    <button className="login__btn" onClick={signIn}>Sign in</button>
            </form>

            </div>
            <p className="login__info">Or you can:</p>
            <button className="login__btn" onClick={signInWithGoogle}>Log in with google account</button>
        </div>
    )
}

export default Login
