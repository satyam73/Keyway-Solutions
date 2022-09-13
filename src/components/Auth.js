import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
function Auth(props) {
    const navigate = useNavigate();
    const { Component } = props;
    useEffect(() => {
        let isLogged = localStorage.getItem("isLogged");
        isLogged = Boolean(isLogged)
        console.log(isLogged)
        // console.log(isLogged)
        if (!isLogged) {
            alert("log in to view the page");
            navigate("/");
        }
    });
    return (
        <div>
            <Component />
        </div>
    )
}

export default Auth;