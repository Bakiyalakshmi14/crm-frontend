import React, { useEffect, useState} from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { BreadCrumb } from "../../Components/breadcrumb/Breadcrumb.Comp"
import { SearchForm } from "../../Components/searchForm/searchForm.Comp"
import { TicketTable } from "../../Components/ticketTable/ticketTable.Comp"
import tickets from "../../assets/data/dummyTickets.json";
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { fetchAllTickets } from "./TicketAction";

export const TicketList = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch( fetchAllTickets())
    }, [ dispatch])

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <BreadCrumb page="Ticket List"/>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <Link to="/add-ticket">
                            <Button variant="info">Add New Ticket</Button>
                        </Link>
                    </Col>
                    <Col className="text-right">
                        <SearchForm/>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        <TicketTable/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}