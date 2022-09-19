import React from 'react';
import email from '../images/email-icon.png';
import linkedin from '../images/linkedin-icon.png';

export default function Main(){
    return(
        <div className="main-content">
            <div className="main-info">
                <h1>Laura Smith</h1>
                <h3>Frontend Developer</h3>
                <p>laurasmith.website</p>
            </div>
            <div className="main-links">
                <div className="email">
                    <img src={email} alt="Email" className="email-icon"/>
                    <p>Email</p>
                </div>
                <div className="linkedin">
                    <img src={linkedin} alt="LinkedIn" className="linkedin-icon"/>
                    <p>Linkedin</p>
                </div>
            </div>
            <div className="main-features">
                <div className="main-about">
                    <h3>About</h3>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </div>
                <div className="main-intrests">
                    <h3>Interests</h3>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>
        </div>
    )
}