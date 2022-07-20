import React from 'react';
import { Button, Form } from 'react-bootstrap';

function MemberLogin() {
  return (
    <>
    <div style={{ 
        color: '#00c086',  
        paddingLeft: 50,
        paddingRight: 50, 
        maxWidth: 325, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'}}>
        <Form>
            <Form.Group className="mb-1" controlId="memberEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
            <Form.Group className="mb-1" controlId="memberPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
            <Button variant="primary" type="submit">
                Log In
            </Button>
        </Form>
    </div>
    </>
  );
}

export default MemberLogin;