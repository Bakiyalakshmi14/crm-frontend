import React, { useEffect, useState} from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { BreadCrumb } from "../../Components/breadcrumb/Breadcrumb.Comp"
import { SearchForm } from "../../Components/searchForm/searchForm.Comp"
import { TicketTable } from "../../Components/ticketTable/ticketTable.Comp"
import tickets from "../../assets/data/dummyTickets.json";
import { Link } from "react-router-dom"

export const TicketList = () => {

    const [ str, setStr] = useState('');
    const [ displayTicket, setDisplayTicket] = useState(tickets);

    useEffect(()=> {

    }, [ str, displayTicket])

    const handleOnChange = (e) => {
        setStr(e.target.value)
        searchTicket(e.target.value)
        console.log(e.target)
    }

    const searchTicket = (sstr) => {
        const ticketList = tickets.filter(row => row.subject.toLowerCase().includes(sstr.toLowerCase()))
        setDisplayTicket(ticketList);
    }

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
                        <SearchForm handleOnChange={handleOnChange} str={str}/>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        <TicketTable tickets ={displayTicket}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}