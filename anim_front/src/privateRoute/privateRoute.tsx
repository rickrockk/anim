import React, {Component} from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
    const userData = localStorage.getItem("userDetails")
    return userData ? <Outlet/> : <Navigate to='/'/>
};