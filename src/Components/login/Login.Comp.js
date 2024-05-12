import { Container, Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap";
import React, { useState, useEffect} from "react";
import { loginPending, loginSuccess, loginFail} from "./LoginSlice";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../pages/Dashboard/userAction";
import axios from "axios";
import { userLogin } from "../../api/userApi";
import { useNavigate } from "react-router-dom";

export const Login = ({ formSwitch}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, isAuth, error} = useSelector( state => state.login);

    useEffect(()=> {
        ( 
            // isAuth || 
            sessionStorage.getItem('accessJWT')) && navigate('/dashboard');
    }, [navigate])

    const [ email, setEmail] = useState('mail6@gmail.com');
    const [ password, setPassword] = useState('password')

    const handleOnChange = e => {
        const { name, value} = e.target
        switch( name){
            case "email":
                setEmail(value)
                break;
            case "password":
                setPassword(value)
                break;
            default:
                break;
        }
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        if(!email || !password){
            return alert('Email and Password are required field')
        }

        dispatch(loginPending())

        try{
            const isAuth = await userLogin({ email, password})

            dispatch(loginSuccess())
            dispatch(getUserProfile())
            navigate('/dashboard');
        } catch(err){
            console.log(`........ err ${ err}`)
            dispatch(loginFail(err.message))
        }
        
    }

    return(
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Client Login</h1>
                    <hr/>
                    { error && <Alert variant="danger">{error}</Alert>}
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
                        {isLoading && <Spinner variant="primary" animation="border" /> }
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