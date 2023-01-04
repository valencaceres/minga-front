import React  from 'react'
import './nav.css'
/* import logo1 from './public/assets/logo1.png' */


export default function Nav() {
  

  return (
    <nav >
     
    <a href="#"><img className='imgLogo' src="/assets/logo1.png" alt="" /></a>
    <a href="#">Comics</a>
    <a className="login-button" href="#">Iniciar Sesión</a>   
 

  </nav>
  )
}

