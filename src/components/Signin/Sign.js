import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer'
import './Sign.css';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const Sign = () => {
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
            <Header></Header>
            <Container className="mt-5 mb-5">
              <Row>
                  <Col lg={6} md={6} sm={12}>
                    <h3 style={{ fontWeight: '500', color: ' #5c0a3f', mt: 5, mb: 5 }}>Please Login</h3>
                    {user?.email && <Alert style={{ width: '37.8%' }} severity="success">Log in Successfully</Alert>}
                    {authError && <Alert style={{ width: '37.8%' }} severity="error">{authError}</Alert>}
                    {!loading && <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <h4 style={{ fontWeight: '500', color: ' #5c0a3f' }}>Your Email</h4>
                        <input type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        <h4 style={{ fontWeight: '500', color: ' #5c0a3f' }}>Your Password</h4>
                        <input type="password" placeholder="Password" {...register("password", {required: true})} />

                        <Button style={{ width: '12%', height: '2.5rem', backgroundColor: '#ff5a3c', color: '#fff', marginTop: '4rem',}} type="submit">Login</Button>
                    </form>}
                    <NavLink style={{ textDecoration: 'none' }} to="/register">
                        <Button style={{ color: ' #5c0a3f', fontSize: '1.1rem', marginBottom: '2rem'}} variant="text" type="submit">New User? Please Sign Up</Button>
                    </NavLink>
                    <h3 className="text-center">- - - - - - - - - - - - - - - - - OR - - - - - - - - - - - - - - - - -</h3>
                    <Button onClick={handleGoogleLogin} style={{ width: '20%', height: '2.5rem', backgroundColor: '#ff5a3c', color: '#fff', marginTop: '3rem', marginBottom: '2rem' }} type="submit">Login With Google</Button>      
                  </Col>     
              </Row>
            </Container>
        <Footer></Footer>
        </>
    );
};

export default Sign;