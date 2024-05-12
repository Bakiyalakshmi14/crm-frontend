import React, {useState, useEffect} from "react"
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import { BreadCrumb } from "../../Components/breadcrumb/Breadcrumb.Comp";
import { MessageHistory } from "../../Components/messageHistory/MessageHistory.Comp";
import { UpdateTicket } from "../../Components/updateTicket/UpdateTicket";
import { useParams, Link } from "react-router-dom";
import { fetchSingleTicket, closeTicket } from "../TicketList/TicketAction";
import { useDispatch, useSelector } from "react-redux";

export const Ticket = () => {
    const {tid }= useParams();
    const dispatch = useDispatch();
    const { isLoading, error, selectedTicket} = useSelector( state => state.tickets)
    const { replyMsg} = useSelector( state => state.tickets)
    const [ message, setMessage] = useState('')

    useEffect(()=> {
        dispatch(fetchSingleTicket(tid))
    }, [ message, tid, dispatch])

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <BreadCrumb page="Ticket"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        { isLoading && <Spinner variant="primary" animation="border"/>}
                        {error && <Alert variant="danger">{error}</Alert>}
                        { replyMsg && <Alert variant="success">{replyMsg}</Alert>}
                    </Col>
                </Row>
                <Row>
                    <Col className="text-weight-bolder text-secondary">
                        <div className="subject">Subject: {selectedTicket?.subject} </div>
                        <div className="date">Ticket Opened: {new Date(selectedTicket?.openedAt).toLocaleString()}</div>
                        <div className="status">Status: {selectedTicket?.status}</div>
                    </Col>
                    <Col className="text-end">
                        {/* <Link to="/tickets"> */}
                            <Button variant="outline-info" onClick = { () => dispatch( closeTicket(tid))} disabled={selectedTicket.status === 'Closed'}>Close Ticket</Button>
                        {/* </Link> */}
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <MessageHistory msg={selectedTicket?.conversations}/>
                    </Col>
                </Row>
                <hr/>
                <Row className="mt-4">
                    <Col>
                        <UpdateTicket/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}