 import React from "react"
 import { Form, Button, Row, Col } from "react-bootstrap"
 import './addTicketForm.style.css';
 
 export const AddTicketForm = ({handleOnSubmit, handleOnChange, formData, formDataError})=> {
    return (
        <div className="p-4 mjb-4 bg-light rounded-3 shadow form-box mt-3 add-new-ticket bg-light">
            <h2 className="text-info text-center">Add New Ticket</h2>
            <hr/>
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
                        name="detail" 
                        value={formData.detail}
                        rows="5"
                        onChange={(e) => handleOnChange(e)}
                        required
                        />
                    </Col>
                </Form.Group>
                <br/>
                <Button type="submit" variant="info" style={{ width: '100%' }}>Add Ticket</Button>
                <br/>
            </Form>
        </div>
    )
 }