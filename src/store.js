import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./pages/TicketList/TicketSlice"
import loginReducer from "./Components/login/LoginSlice"
import userReducer from "./pages/Dashboard/userSlice"
import newTicketReducer from "./Components/addTicketForm/AddTicket.Slice"

const store = configureStore({
    reducer: { 
        tickets: ticketsReducer,
        login: loginReducer,
        user: userReducer,
        newTicket: newTicketReducer
    }
})

export default store;