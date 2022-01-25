import React, { useState } from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../hooks/useAuth';
import './Sign.css';

const Sign = () => {
    const { signInUsingGoogle } = useAuth();
    let location = useLocation();
    let history = useHistory();
    const auth = getAuth();
    let redirectUri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
                history.push(redirectUri);
            })
    }
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const getEmail = e => {
        setEmail(e.target.value);
    }
    const getPassword = e => {
        setPassWord(e.target.value);
    }
    const loginSubmit = e => {
        e.preventDefault();
        if (passWord.length < 6) {
            setError('Password Must Be Six Character Or More.');
            return;
        }
        isLogin ? processLogin(email, passWord) : createNewUser(email, passWord);
    }
    const processLogin = (email, passWord) => {
        signInWithEmailAndPassword(auth, email, passWord)
            .then(result => {
                history.push(redirectUri);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    } 
    const createNewUser = (email, passWord) => {
            createUserWithEmailAndPassword(auth, email, passWord)
            .then(result => {
                history.push(redirectUri);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }
    return (
        <>
            <Container className="mt-5 mb-5 d-flex">
                <Row className="justify-content-center">
                    <h2 className="mt-5 mb-5">Please {isLogin ? 'Login' : 'Register'}</h2>
                    <Form onSubmit={loginSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className="login-field" onBlur={getEmail} type="email" placeholder="Enter Your Email" required/>
                            <Form.Text className="text-muted mb-5 mt-4">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className="login-field" onBlur={getPassword} type="password" placeholder="Enter Your Password" required />
                        </Form.Group>
                        <h5 className="mt-3 mb-4 text-danger">{error}</h5>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        </Form.Group>
                        <button type="submit" className="appointment-btn mt-4 mb-4">
                            {isLogin ? 'Login' : 'Register'}
                        </button>
                        <Form.Group className="mt-5" controlId="formBasicCheckbox">
                            <Form.Check onChange={toggleLogin} className="fs-18" type="checkbox" label="Already Registered?" />
                        </Form.Group>
                    </Form>
                    <br />
                    <h4 className="text-center">-------------------------------------OR-------------------------------------</h4>
                    <br />
                        <button onClick={handleGoogleLogin} className="appointment-btn mb-5 mt-5 w-25">Login With Google</button>
                </Row>
            </Container>
            
        </>
    );
};

export default Sign;