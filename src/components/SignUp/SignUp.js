import React from 'react';
import { Alert, Button, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
        const { user, loginUser, loading, signInWithGoogle, authError} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        loginUser(data?.email, data?.password, location, history);
  };
    const handleGoogleLogin = (data) => {
        signInWithGoogle(location, history)
    };
    return (
        <>
            <Container className="mt-5 mb-5 d-flex">
                <Row className="justify-content-center">
                    <h2 className="mt-5 mb-5">Please Register</h2>
                    {user?.email && <Alert style={{ width: '37.8%' }} severity="success">Log in Successfully</Alert>}
                    {authError && <Alert style={{ width: '37.8%' }} severity="error">{authError}</Alert>}
                    {!loading && <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        {/* <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h5">Your Email</Typography> */}
                        <input type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        {/* <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h5">Your Password</Typography> */}
                        <input type="password" placeholder="Password" {...register("password", {required: true})} />

                        <Button style={{ width: '12%', height: '2.5rem', backgroundColor: '#ff5a3c', color: '#fff', marginTop: '4rem',}} type="submit">Login</Button>
                    </form>}
                        {/* {loading && <CircularProgress style={{color: '#ff5a3c'}} />} */}
                    <br />
                    <h4 className="text-center">-------------------------------------OR-------------------------------------</h4>
                    <br />
                        <button onClick={handleGoogleLogin} className="appointment-btn mb-5 mt-5 w-25">Login With Google</button>
                </Row>
            </Container>
        </>
    );
};

export default SignUp;