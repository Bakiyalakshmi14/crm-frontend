import React from "react";

export const Footer = () => {
    return (
        <div className="text-center copy-right">
            &copy; CRM all right reserved - {new Date().getFullYear()}.
        </div>
    )
}