import React from "react";
import './MessageHistory.style.css';

export const MessageHistory = ({ msg})=> {
    if(!msg) return null
    return (
        msg.map(( row, i)=> 
        <div className="message-history mt-3" key={i}>
            <div className="send  font-weight-bold text-secondary">
                <div className="sender">{row.sender}</div>
                <div className="date">{new Date(row.msgAt).toLocaleString()}</div>
            </div>
            <div className="message">{row.message}</div>
        </div>)
    )
}