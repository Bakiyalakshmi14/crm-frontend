import { Container, Row, Col, Form, Button } from "react-bootstrap";
import React, { useState} from "react"

export const PasswordReset = ({ handleOnResetSubmit, formSwitch}) => {

    const [ email, setEmail] = useState('');

    const handleOnChange = e => {
        const { name, value} = e.target
        switch( name){
            case "email":
                setEmail(value)
                break;
            default:
                break;
        }
    }

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