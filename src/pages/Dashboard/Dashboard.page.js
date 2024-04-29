import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TicketTable } from "../../Components/ticketTable/ticketTable.Comp";
import tickets from '../../assets/data/dummyTickets.json'
import { BreadCrumb } from "../../Components/breadcrumb/Breadcrumb.Comp";
import { Link } from "react-router-dom";

export const Dashboard = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <BreadCrumb page="Dashboard" />
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-5 mb-2">
                        <Link to="/add-ticket">
                            <Button variant="info" style={{ fontSize: '2rem', padding: '10px 30px' }}>Add New Ticket</Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mb-2">
                        <div>Total Tickets: 100</div>
                        <div>Pending Tickets: 50</div>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-2">
                        Recently Added Tickets
                    </Col>
                </Row>
                <Row>
                    <Col className="recent-ticket">
                        <TicketTable tickets={tickets} />
                    </Col>
                </Row>
                <hr />
            </Container>
        </div>
    )
}