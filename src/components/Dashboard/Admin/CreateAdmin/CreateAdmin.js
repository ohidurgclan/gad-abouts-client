import React, { useState } from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';

const CreateAdmin = () => {
    const [adminSuccess, setAdminSuccess] = useState(false);
    const [email, setEmail] = useState('');
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const adminSubmit = e => {
        const user = { email };
        fetch('https://protected-crag-64613.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setAdminSuccess(true)
                }
            })
        e.preventDefault();
    };
    
    
    return (
        <Container style={{ marginTop: '10rem', marginBottom: '10rem'}}>
            {adminSuccess && <Spinner style={{ width: '50%' }} severity="success">New Admin Successfully Added * Congratulations *</Spinner>}
            <form className="login-form" onSubmit={adminSubmit}>
                <h4 style={{ fontWeight: '500', color: '#0a2c3d', marginBottom: 4 }}>Create Admin With Email</h4>
                <input onBlur={handleOnBlur} style={{width: '50%'}} type="email" placeholder="Email" required />
                <Button style={{ width: '15%', height: '2.5rem', backgroundColor: '#ff5a3c', color: '#fff', marginTop: '4rem',}} type="submit">Make Admin</Button>
            </form>
        </Container>
    );
};

export default CreateAdmin;