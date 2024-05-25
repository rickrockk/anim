import React from "react";
import "./Events.scss"
import { Card1 } from "./Cards/Card1";
import { Card2 } from "./Cards/Card2";

function Events(){

    return(
        <div className="container__card">
            <div className="title">
                <p>События</p>
            </div>
        <div className="events_card">
            <Card1/>
            <Card2/>
        </div>
        </div>
        
    )

}

export default Events;