import React from 'react'
import "./Container.css"
import Card from "./Card"

function Container() {
    return (
        <div className="Container">
            <div className="header">
                
                <h1>Calorie App</h1>
            </div>
            <div className="home">
                <Card  Name="Small Pizza" Description="400"/>
                <Card  Name="Big Mac" Description="550"/>
                <Card  Name="Coke" Description="500"/>
                <Card  Name="Cake" Description="261"/>
                <Card  Name="Potato Chips" Description="150"/>
                <Card  Name="Chicken Hotdog" Description="116"/>
                <Card  Name="Chocolate" Description="140"/>
            </div>

        </div>
    )
}

export default Container;