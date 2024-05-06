import React, {useEffect} from "react";
import userService from "./UserService";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import {useEffect} from "react";

export const RequireAuth = ({ children }) => {

    return userService.user ? (
        children
    ) : (
        <Navigate/>
    );
};