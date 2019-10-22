import React from 'react';
import ReactDOM from 'react-dom';

import BadgeList from './pages/BadgeList';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

const container = document.getElementById('app');

ReactDOM.render(
    <BadgeList/>, 
    container
);