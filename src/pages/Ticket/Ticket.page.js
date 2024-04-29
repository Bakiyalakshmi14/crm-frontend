import React, {useState, useEffect} from "react"
import { Container, Row, Col, Button } from "react-bootstrap";
import { BreadCrumb } from "../../Components/breadcrumb/Breadcrumb.Comp";
import tickets from "../../assets/data/dummyTickets.json";
import { MessageHistory } from "../../Components/messageHistory/MessageHistory.Comp";
import { UpdateTicket } from "../../Components/updateTicket/UpdateTicket";
import { useParams, Link } from "react-router-dom";

// const ticket = tickets[0];
export const Ticket = () => {
    const {tid }= useParams();


    const [ message, setMessage] = useState('')
    const [ ticket, setTicket] = useState('')

    useEffect(()=> {
        setTicket(...tickets.filter((ticket) => ticket.id == tid))
    }, [ message, tid])

    const handleOnChange = (e) => {
        setMessage(e.target.value)
    }

    const handleOnSubmit = (e) => {
        alert('Form Submitted')
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <BreadCrumb page="Ticket"/>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-weight-bolder text-secondary">
                        <div className="subject">Subject: {ticket.subject} </div>
                        <div className="date">Ticket Opened: {ticket.issueDate}</div>
                        <div className="status">Status: {ticket.status}</div>
                    </Col>
                    <Col className="text-end">
                        <Link to="/tickets">
                            <Button variant="outline-info">Close Ticket</Button>
                        </Link>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <MessageHistory msg={ticket.history}/>
                    </Col>
                </Row>
                <hr/>
                <Row className="mt-4">
                    <Col>
                        <UpdateTicket msg={message} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}