import React, { useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BreadCrumb } from "../../Components/breadcrumb/Breadcrumb.Comp";
import { AddTicketForm } from "../../Components/addTicketForm/AddTicketForm.Comp";
import { Link } from "react-router-dom";

export const AddTicket = () => {

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
                        <AddTicketForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}