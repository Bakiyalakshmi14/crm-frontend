import { fetchTicketLoading, fetchTicketSuccess, fetchTicketFail, searchTicket,
    fetchSingleTicketLoading, fetchSingleTicketSuccess, fetchSingleTicketFail,
    replyTicketLoading, replyTicketSuccess, replyTicketFail,
    closeTicketLoading, closeTicketSuccess, closeTicketFail
} from './TicketSlice'
import axios from 'axios'
import { getAllTickets, updateReplyTicket, getSingleTicket, updateTicketStatusClosed} from '../../api/ticketApi'

export const fetchAllTickets = () => async (dispatch) => {
    dispatch(fetchTicketLoading())
    try{
        const result = await getAllTickets()

        console.log( result)

        dispatch(fetchTicketSuccess(result.data.ticket))
    } catch(err){
        console.log(err)
        // dispatch(fetchTicketFail(err.response.data.message))
        dispatch(fetchTicketFail(err.message))
    }
}

export const filterTicket = (str) => async (dispatch) => {
    dispatch(searchTicket(str))
}

export const fetchSingleTicket = (_id) => async (dispatch) => {
    dispatch(fetchSingleTicketLoading())
    try{
        const result = await getSingleTicket(_id)

        console.log( `.... ${result}`)

        dispatch(fetchSingleTicketSuccess(result))
    } catch(err){
        console.log(err)
        // dispatch(fetchTicketFail(err.response.data.message))
        dispatch(fetchSingleTicketFail(err.message))
    }
}

export const replyOnTicket = (_id, msgObj) => async (dispatch) => {
    dispatch(replyTicketLoading())
    try{
        const result = await updateReplyTicket(_id, msgObj)

        console.log( `${result}`)

        dispatch(replyTicketSuccess(result.message))
        dispatch(fetchSingleTicket(_id))
    } catch(err){
        console.log(err)
        // dispatch(fetchTicketFail(err.response.data.message))
        dispatch(replyTicketFail(err.message))
    }
}

export const closeTicket = (_id) => async (dispatch) => {
    dispatch(closeTicketLoading())
    try{
        const result = await updateTicketStatusClosed(_id)

        console.log( `${result}`)

        dispatch(closeTicketSuccess(result.message))
        dispatch(fetchSingleTicket(_id))
    } catch(err){
        console.log(err)
        dispatch(closeTicketFail(err.message))
    }
}