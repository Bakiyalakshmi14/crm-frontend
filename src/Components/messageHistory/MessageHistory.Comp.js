import React from "react";
import './MessageHistory.style.css';

export const MessageHistory = ({ msg})=> {
    if(!msg) return null
    return (
        msg.map(( row, i)=> 
        <div className="message-history mt-3" key={i}>
            <div className="send  font-weight-bold text-secondary">
                <div className="sender">{row.messageBy}</div>
                <div className="date">{row.date}</div>
            </div>
            <div className="message">{row.message}</div>
        </div>)
    )
}