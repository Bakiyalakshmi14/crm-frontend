import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    successMsg: '',
    error: ''
}

const newTicketSlice = createSlice({
    name: 'newTicket',
    initialState,
    reducers: {
        openNewTicketPending: ( state, action) => {
            state.isLoading = true
        },
        openNewTicketSuccess: ( state, action) => {
            state.isLoading = false
            state.error = ''
            state.successMsg = action.payload
        },
        openNewTicketFail: ( state, { payload}) => {
            state.isLoading = false
            state.error = payload
        },
        resetSuccessMsg: ( state) => {
            state.successMsg = ''
        },
    }
})

const { reducer, actions} = newTicketSlice

export const { openNewTicketPending, openNewTicketSuccess, openNewTicketFail, resetSuccessMsg} = actions

export default reducer