import React from 'react';
import {Link} from 'react-router-dom';

import './styles/BadgeHome.css';

import astronauts from '../images/astronauts.svg';
import confLogo from '../images/badge-header.svg';

function BadgeHome() {
    return (
        <div className="BadgeHome">
            <div className="BadgeHome_info">
                <img src={confLogo} alt="Platzi conf logo"/>
                <h1 className="text-uppercase">Print your badges</h1>
                <p>the easiest way yo manage your <br/>conference</p>
                <Link className="btn btn-primary" to="/badge">Start now</Link>
            </div>
            <div className="BadgeHome_logo">
                <img src={astronauts} alt="Astronauts"/>
            </div>
        </div>
    );
}

export default BadgeHome;