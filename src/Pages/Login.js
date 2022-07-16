import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

function MemberLogin() {
  return (
    <Container id='logger'>
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
    </Container>
  );
}

export default MemberLogin;