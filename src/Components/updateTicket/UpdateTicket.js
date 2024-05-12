import React from "react";
import { Form, Button, Alert} from "react-bootstrap"
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { replyOnTicket } from "../../pages/TicketList/TicketAction";

export const UpdateTicket = () => {
    const dispatch = useDispatch();
    const [ message, setMessage] = useState('');
    const { user: {name, _id}} = useSelector( state=> state.user)
    const { selectedTicket} = useSelector( state => state.tickets)
    const handleOnChange = (e) => {
        setMessage(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const msgObj = {
            message,
            sender: name
        }
        dispatch(replyOnTicket(selectedTicket._id, msgObj));
        setMessage('');
    }
    return (
        <div>
            <Form onSubmit={handleOnSubmit}>
                <Form.Label>Reply</Form.Label>
                <br/>
                <Form.Text>Please reply your message here or update the ticket.</Form.Text>
                <Form.Control
                    value={message}
                    onChange={(e)=> handleOnChange(e)}
                    as="textarea"
                    row="5"
                    name="detail"
                />
                <div className="text-end mt-3 mb-3">
                    <Button variant="info" type="submit">Reply</Button>
                </div>
            </Form>
        </div>
    )
}