import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then(cred => {
            navigate('/');
        }).catch(error => {
            alert(error.message)
        })
    }

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email,password).then(cred =>{
            navigate('/');
        }).catch(error=>{
            alert(error.message);
        })
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='logo' />
            </Link>

            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button onClick={login} type='submit' className='login__singInButton'>Sign In</button>
                </form>
                <p>By signing-in you agree to Amazon's condition of use and sale. Please see our privacy Notice, our cookies Notice and our interest-Based ads Notice.</p>
                <button onClick={register} className='login__registerButton'>Create Your Amazon account</button>
            </div>
        </div>
    )
}

export default Login