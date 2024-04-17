import React from "react";
import "./Notification.scss";
import {  BiError } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const Notification = ({ message, hideNotification, type }) => {
    return (
        <div className={`notification ${type}`}>
            <div className="notification-message">
                {type === "error" && <BiError className="error-image" />}
                <p>{message}</p>
            </div>
            <div onClick={() => hideNotification()}>
                <IoMdClose className="close-image"/>
            </div>
        </div>
    );
};

export default Notification;
