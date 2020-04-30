import React from 'react'
import { NavLink } from 'react-router-dom'


export default function FooterNew() {
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
      <h2> - ©	<a href="http://sylvieroche.com/webdev1/"> <img src="http://sylvieroche.com/webdev1/wp-content/uploads/2020/03/logo-sylvie-roche.png" style={width} alt="Sylvie Roche &amp; Photographe" /> </a> -</h2>
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
