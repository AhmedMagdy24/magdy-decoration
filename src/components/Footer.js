import React from "react";
import "./Footer.css";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { FaInstagram, FaFacebookSquare} from "react-icons/fa";




export default function Footer() {
    return (
        <div className="footer-cotainer">
            <div className="contact-info">
                <div className="contact-info-container">
                    <span><BsTelephoneFill /></span>
                    <h2>01001568146 - 01224894310</h2>
                </div>
                <div className="contact-info-container">
                    <span><MdEmail /></span>
                    <h2>magdyfouad219@gmail.com</h2>
                </div>

                <div className="contact-info-container">
                    <span><HiLocationMarker /></span>
                    <h2>Elmohandseen - Giza</h2>
                </div>
            </div>
            
                <div className="footer-links">
                    <p>Magdy Decoration ©2022 All Rights Reserved.</p>
                    <div className="social-media">
                    <a href="https://instagram.com/magdyahmed62?igshid=YmMyMTA2M2Y=" target="_blank" className="instagram" ><FaInstagram /></a> 
                    <a href="https://www.facebook.com/magdydecoration" target="_blank"  className="facebook"><FaFacebookSquare /></a> 
                        </div>
                    </div>
           
        </div>
    )

}


