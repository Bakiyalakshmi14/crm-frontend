import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const PasswordReset = ({ handleOnChange, email, handleOnResetSubmit, formSwitch}) => {
    return(
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Reset Password</h1>
                    <hr/>
                    <Form onSubmit={handleOnResetSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control 
                            type="email" 
                            name="email" 
                            value={email} 
                            placeholder="Enter Email" 
                            onChange={(e)=> handleOnChange(e)}
                            required
                            />
                        </Form.Group>
                        <br/>
                        <Button type="submit">Reset Password</Button>
                    </Form>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!" onClick = {()=> formSwitch('login')}>Login now?</a>
                </Col>
            </Row>
        </Container>
    )
}