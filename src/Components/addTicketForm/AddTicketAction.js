import axios from "axios";
import { openNewTicketPending, openNewTicketSuccess, openNewTicketFail } from "./AddTicket.Slice";
import { createNewTicket } from "../../api/ticketApi";

export const openNewTicket = ( formData) => async ( dispatch) => {
    return new Promise(async ( resolve, reject)=> {
        try{
            dispatch(openNewTicketPending());
            const result = await createNewTicket( formData);
            console.log( result);
            dispatch(openNewTicketSuccess(result.message));

        } catch( err){
            console.log(err);
            dispatch(openNewTicketFail(err.message))
        }   
    })

}
