import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tickets: [],
    isLoading: false,
    error: '',
    searchTicketList: [],
    selectedTicket: {},
    replyMsg: ''
}

const ticketListSlice = createSlice({
    name: 'ticketList',
    initialState,
    reducers: {
        fetchTicketLoading: (state, action) => {
            state.isLoading = true;
        },
        fetchTicketSuccess: (state, action) => {
            state.isLoading = false;
            state.searchTicketList = action.payload
            state.tickets = action.payload
            state.error = ''
        },
        fetchTicketFail: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload
        },
        searchTicket: (state, { payload }) => {
            state.searchTicketList = state.tickets.filter((row) => {
                if (!payload) {
                    return row
                }
                return row.subject.toLowerCase().includes(payload.toLowerCase())
            })
        },
        fetchSingleTicketLoading: (state, action) => {
            state.isLoading = true;
        },
        fetchSingleTicketSuccess: (state, action) => {
            state.isLoading = false;
            state.selectedTicket = action.payload
            state.error = ''
        },
        fetchSingleTicketFail: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload
        },
        replyTicketLoading: (state, action) => {
            state.isLoading = true;
        },
        replyTicketSuccess: (state, action) => {
            state.isLoading = false;
            state.replyMsg = action.payload
            state.error = ''
        },
        replyTicketFail: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload
        },
        closeTicketLoading: (state, action) => {
            state.isLoading = true;
        },
        closeTicketSuccess: (state, action) => {
            state.isLoading = false;
            state.replyMsg = action.payload
            state.error = ''
        },
        closeTicketFail: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload
        },
    }
})

const { reducer, actions } = ticketListSlice

export const { fetchTicketLoading, fetchTicketSuccess, fetchTicketFail, searchTicket,
    fetchSingleTicketLoading, fetchSingleTicketSuccess, fetchSingleTicketFail, replyTicketLoading,
    replyTicketSuccess, replyTicketFail, closeTicketLoading, closeTicketSuccess, closeTicketFail
} = actions

export default reducer