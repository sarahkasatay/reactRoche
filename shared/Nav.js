import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './assets/images/logo-sylvie-roche.png'
import instagram from './assets/images/logo-sylvie-roche-instagram.png'

export default function Nav() {
    const pages = [{
        name: 'Home',
        param: ''
    },{
        name: 'Portfolio',
        param: 'portfolio'
    }, {
        name: 'Contact',
        param: 'contact'
    }
]

return (
    <header>
    <div className="container">
      <div className="warrp-logo">
        <div className="logo">
          <a href="https://www.instagram.com/sylvie.roche_photos/">
            <img src={logo} alt="Sylvie Roche & Photographe" width="96"/>
          </a>
        </div>
    <div className="menu">
            <nav>
              <div className="menu-primary">
    <ul id="menu-menu-1" className="menu">
        {pages.map(({name,param}) => (
            <li key={param}>
                <NavLink to={param}>
                    {name}
                </NavLink>
            </li>
        ))}
      </ul>
  </div>
            </nav>
          </div>
          </div>
        <div className="instagram">
          <a target="_blank" href="https://www.instagram.com/sylvie.roche_photos/">
            <img src={instagram} alt="" />
          </a>
        </div>
      </div>
    </header>
)
}