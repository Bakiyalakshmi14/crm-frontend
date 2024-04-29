import React, { useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BreadCrumb } from "../../Components/breadcrumb/Breadcrumb.Comp";
import { AddTicketForm } from "../../Components/addTicketForm/AddTicketForm.Comp";
import { shortText } from "../../utility/validation";
import { Link } from "react-router-dom";

export const AddTicket = () => {

    const initialFormDt = {
        "subject": "",
        "issueDate": "",
        "detail": ""
    }

    const initialFormError = {
        "subject": false,
        "issueDate": false,
        "detail": false
    }

    const [ formData, setFormData] = useState(initialFormDt);
    const [ formDataError, setFormDataError] = useState(initialFormError)

    useEffect(()=>{

    }, [ formData, formDataError])

    const handleOnSubmit = (e) => {
        e.preventDefault();

        setFormDataError(initialFormError);
        const isValid = shortText( formData.subject)

        setFormDataError(( prevValue) => ({
            ...prevValue,
            subject: !isValid
        }))
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
        <div>
            <Container>
                <Row>
                    <Col>
                        <BreadCrumb page="New Ticket" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AddTicketForm 
                        handleOnSubmit={ handleOnSubmit} 
                        handleOnChange= { handleOnChange} 
                        formData= {formData}
                        formDataError = { formDataError}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}