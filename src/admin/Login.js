import React , { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authentication } from '../firebase.js';
import './login.css';

function Login(){

    var history = useHistory();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const performLogin = (e)=>{
        e.preventDefault();
        if(email == ''){
            setEmailError('This field can\'t be empty')
        }else if(password == ''){
            setPasswordError('This field can\'t be empty')
        }else{
            authentication.signInWithEmailAndPassword(email,password)
            .then((user)=>{
                history.push('/admin');
            })
            .catch((error)=>{
                switch(error.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(error.message)
                        break
                    case "auth/wrong-password":
                        setPasswordError(error.message)
                }
            })
        }
    }
    return (
        <section className="login__wrapper">
            <div className="login__container">
                <h3>Login</h3>
                    <div className="form__group">
                        <label htmlFor="email">Email</label>
                        <input className="form__input" type="text" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        {
                            emailError ? <span className="error">{emailError}</span> :null
                        }
                    </div>
                    <div className="form__group">
                        <label htmlFor="password">Password</label>
                        <input className="form__input" type="password" id="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        {
                            passwordError ? <span className="error">{passwordError}</span> :null
                        }
                    </div>
                    <button type="submit" className="login__submit__btn" onClick={performLogin}>Login</button>
            </div>
        </section>
    )
}

export default Login