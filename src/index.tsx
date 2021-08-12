import "core-js";
import "regenerator-runtime";

import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './containers/MainContainer'

import 'reset-css'
import './index.scss'

ReactDOM.render(
    <MainContainer />,
    document.getElementById('app')
)

