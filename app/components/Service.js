import React from "react";
import "./Service.css";
import ServiceItem from "./ServiceItem";
import { HashLink, NavHashLink } from 'react-router-hash-link';


function Service() {
    return (
        <div className='cards' id="services">
        <h1>Our Services</h1>
        <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <ServiceItem
                src="images/kitchen.jpg"
                text='Kitchen'
                path='/services'
                />
                <ServiceItem
                src="images/Office.jpg"
                path='/services'
                text='office'
                />
                <ServiceItem
                src="images/bedroom.jpg"
                path='/services'
                text='Bedroom'
                />
                <ServiceItem
                src="images/livingroom.jpg"
                path='/services'
                text='living Room'
                />
                <ServiceItem
                src="images/diningroom.jpg"
                path='/services'
                text='Dining room'
                />
            </ul>
        </div>
        </div>
      </div>

    )

}


export default Service;


/* 
https://source.unsplash.com/MCKrW7fB7Pw

Bedroom q9QVDa-EPgM
office luseu9GtYzM
kichten CCjAPxoQWgQ
bathroom U7PitHRnTNU
living OtXADkUh3-I
<h1 className="main">Our Service</h1>
                <p className="secondary">What type of space are you planning to furnish? We can help.</p>

*/