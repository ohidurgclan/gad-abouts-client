import React from 'react';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
        const { user, registerUser, loading, authError} = useAuth();
    const history = useHistory();
    const location = useLocation();
const { register, handleSubmit } = useForm();
    const loginData = data => {
        if (data.password !== data.password2) {
            alert('Your Password Did not Match');
            return;
        }
        registerUser(data.email, data.password, location, history);
    };
    return (
        <>
            <Header></Header>
            <Container className="mt-5 mb-5">
              <Row>
                  <Col lg={6} md={6} sm={12}>
                    <h2 className="mt-5 mb-5">Please Register</h2>
                    {user?.email && <Alert style={{ width: '37.8%' }} severity="success">Successfully Registered</Alert>}
                    {authError && <Alert style={{ width: '37.8%' }} severity="error">{authError}</Alert>}
                        {!loading && <form className="login-form" onSubmit={handleSubmit(loginData)}>
                        <input type="text" placeholder="Your Name" {...register("displayName", {required: true})} />
                        {/* <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h5">Your Email</Typography> */}
                        <input type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        {/* <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h5">Your Password</Typography> */}
                        <input type="password" placeholder="Password" {...register("password", {required: true})} />
                        <input type="password" placeholder="Retype Your Password" {...register("password2", {required: true})} />
                        <Button style={{ width: '20%', height: '2.5rem', backgroundColor: '#ff5a3c', color: '#fff', marginTop: '4rem',}} type="submit">Register</Button>
                    </form>}
                        {/* {loading && <CircularProgress style={{color: '#ff5a3c'}} />} */}
                  </Col>  
              </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default SignUp;