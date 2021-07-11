import React from 'react'
import "./Card.css"

function Card({Name, Description}) {
    return (
        <div className="Card">
            <h1>{Name}</h1>
            <h2>Calories Consumed= {Description}</h2>
        </div>
    )
}

export default Card;