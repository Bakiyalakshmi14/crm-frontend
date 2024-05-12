 import React from "react"
 import { Form, Button, Row, Col, Spinner, Alert } from "react-bootstrap"
 import './addTicketForm.style.css';
 import { useState, useEffect } from "react";
 import { shortText } from "../../utility/validation";
 import { useDispatch, useSelector } from "react-redux";
 import { openNewTicket } from "./AddTicketAction";
 import { resetSuccessMsg } from "./AddTicket.Slice";
 
 export const AddTicketForm = ()=> {
    
    const dispatch = useDispatch();
    const { user: {name}} = useSelector( state => state.user);
    const { isLoading, error, successMsg } = useSelector( state => state.newTicket);

    const initialFormDt = {
        "subject": "",
        "issueDate": "",
        "message": ""
    }

    const initialFormError = {
        "subject": false,
        "issueDate": false,
        "message": false
    }

    const [ formData, setFormData] = useState(initialFormDt);
    const [ formDataError, setFormDataError] = useState(initialFormError)

    useEffect(()=>{
        return ()=> {
            successMsg && dispatch(resetSuccessMsg())
        };
    }, [ formData, dispatch, formDataError])

    const handleOnSubmit = (e) => {
        e.preventDefault();

        setFormDataError(initialFormError);
        const isValid = shortText( formData.subject)

        setFormDataError(( prevValue) => ({
            ...prevValue,
            subject: !isValid
        }))

        dispatch(openNewTicket( {...formData, sender: name}))
        console.log(`Form submit request recieved... ${JSON.stringify(formData)}`)
    }

    const handleOnChange = (e) => {
        let { name, value} = e.target;
        setFormData(
            ( prevValue) => ({
            ...prevValue,
            [name]: value
        })
    )

    }
    
    return (
        <div className="p-4 mjb-4 bg-light rounded-3 shadow form-box mt-3 add-new-ticket bg-light">
            <h2 className="text-info text-center">Add New Ticket</h2>
            <hr/>
            <div>
                { error && <Alert variant="danger">{error}</Alert>}
                { successMsg && <Alert variant="success">{successMsg}</Alert>}
                { isLoading && <Spinner variant="primary" animation="border"/>}
            </div>
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                        <Form.Control 
                        type="text" 
                        name="subject" 
                        value={formData.subject}
                        placeholder="Enter Subject" 
                        // minLength= "3"
                        // maxLength="100"
                        onChange={(e)=>handleOnChange(e)}
                        required
                        />
                        <Form.Text className="text-danger">{formDataError.subject && "Subject should be minimum 3 & maximum 100 character length"}</Form.Text>
                    </Col>
                </Form.Group>
                <br/>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Issue Found</Form.Label>
                    <Col sm={9}>
                        <Form.Control 
                        type="date" 
                        name="issueDate" 
                        value={formData.issueDate}
                        onChange={(e) => handleOnChange(e)}
                        required
                        />
                    </Col>                    
                </Form.Group>
                <br/>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Detail</Form.Label>
                    <Col sm={9}>
                        <Form.Control 
                        as="textarea"
                        type="textarea" 
                        name="message" 
                        value={formData.message}
                        rows="5"
                        onChange={(e) => handleOnChange(e)}
                        required
                        />
                    </Col>
                </Form.Group>
                <br/>
                <Button type="submit" variant="info" style={{ width: '100%' }}>Open Ticket</Button>
                <br/>
            </Form>
        </div>
    )
 }