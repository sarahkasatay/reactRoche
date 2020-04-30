import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './assets/images/logo-sylvie-roche.png'

export default function Footer() {
    const pages = [{
        name: 'Portfolio',
        param: 'portfolio'
    }, {
        name: 'Contact',
        param: 'contact'
    }
]

const width = {
    width: '96'
}

        return(
            <footer>
  <div class="container footer">
    <div class="copyright">
      <h2> - ©	<a href="https://www.instagram.com/sylvie.roche_photos/"> <img src={logo} style={width} alt="Sylvie Roche &amp; Photographe" /> </a> -</h2>
      <ul>
      {pages.map(({name,param}) => (
            <li key={param}>
                <NavLink to={param}>
                    {name}
                </NavLink>
            </li>
        ))}
                 </ul>
    </div>
    <div class="agency">
     <h3>Webdesign <a href="http://markette.ch/" target="_blank" rel="noopener">Markette Agency SA</a></h3>
    </div>

  </div>
</footer>
        );
    }
