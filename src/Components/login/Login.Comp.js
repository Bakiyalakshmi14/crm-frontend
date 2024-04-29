import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const Login = ({ handleOnChange, email, password, handleOnSubmit, formSwitch}) => {
    return(
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Client Login</h1>
                    <hr/>
                    <Form onSubmit={handleOnSubmit}>
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
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            name="password" 
                            value={password} 
                            placeholder="Enter Password"  
                            onChange={(e)=> handleOnChange(e)}
                            required
                            />
                        </Form.Group>
                        <br/>
                        <Button type="submit">Login</Button>
                    </Form>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!" onClick = {()=> formSwitch('reset')}>Forgot Password?</a>
                </Col>
            </Row>
        </Container>
    )
}