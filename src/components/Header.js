import React from 'react';
import Laura from '../images/laura-smith.png';

export default function Header(){
    return(
        <div className="header">
            <img src={Laura} alt="React Logo" className="profile-img"/>
        </div>
    )
}