import React from "react"
import { Form, Row, Col } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { filterTicket } from "../../pages/TicketList/TicketAction"

export const SearchForm = ()=> {
    const dispatch = useDispatch();
    let str = ''
    const handleOnChange = (e)=> {
        const { name, value} = e.target;
        str = value
        dispatch(filterTicket(value))
    }
    return (
        <div>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm="2">Search</Form.Label>
                    <Col sm="10">
                        <Form.Control 
                            name="searchStr"
                            onChange={handleOnChange}
                            // value={str}
                            placeholder="Search..."
                        />
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}