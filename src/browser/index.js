import React from 'react'
import {hydrate} from 'react-dom'
import App from '../../shared/App'
import { BrowserRouter } from 'react-router-dom';
import '../../shared/assets/css/fancy.css';
import '../../shared/assets/css/index.css';
import '../../shared/assets/css/block.css';



hydrate(
    <BrowserRouter>
         <App data={window.__INITIAL_DATA__}/>
    </BrowserRouter>,
    document.getElementById('root')
)


