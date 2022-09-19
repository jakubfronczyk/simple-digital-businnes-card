import React from 'react';
import twitter from '../images/twitter-icon.png';
import facebook from '../images/facebook-icon.png';
import instagram from '../images/instagram-icon.png';
import soundcloud from '../images/soundcloud-icon.png';

export default function Footer() {
    return(
        <footer className="footer">
            <img src={twitter} alt="Twitter icon" className="footer-links-icon"/>
            <img src={facebook} alt="Facebook icon" className="footer-links-icon"/>
            <img src={instagram} alt="Instagram icon" className="footer-links-icon"/>
            <img src={soundcloud} alt="SoundCloud icon" className="footer-links-icon"/>
        </footer>
    )
}

