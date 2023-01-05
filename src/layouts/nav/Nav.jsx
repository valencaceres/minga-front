import React, { useState } from 'react'
import { Link as Anchor } from "react-router-dom";
import './nav.css'
/* import logo1 from './public/assets/logo1.png' */


export default function Nav() {
  const [variable, setVariable] = useState(false);
  const handleMenu = () =>{
    setVariable(!variable)
  }

  return (
    <nav >
     
    <a href="#"><img className='imgLogo' src="/assets/logo1.png" alt="" /></a>

    <button onClick={handleMenu} className="menuButton">Menu</button>
        {
          variable
          ?
          (
            <nav className="activo">
              <div className="navItems">
              <Anchor to={"/"}>Home</Anchor>
              <Anchor to={"/comics"}>Comics</Anchor>
              <Anchor to={"/chapters"}>Chapters</Anchor>
              <Anchor to={"/form"}>Form</Anchor>
              </div>
          </nav>
          )
          :
        <nav className="none">
          <a href="#">Home</a>
          <a href="#">Comics</a>
          <a href="#">Comic Details</a>
          <a href="#">New Comic</a>
        </nav>
        }

    <a className="login-button" href="#">Iniciar Sesión</a>   
 

  </nav>
  )
}

