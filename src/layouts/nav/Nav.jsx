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
    <nav className='nav-container'>
     
    <Anchor to={"/"}><img className='imgLogo' src="/assets/logo1.png" alt="" /></Anchor>
 
    <button onClick={handleMenu} className="menuButton">Menu</button>
        {
          variable
          ?
          (
            <nav className="activo">
              <div className="navItems">
              <Anchor to={"/"}>Home</Anchor>
              <Anchor to={"/my-comics"}>My comics</Anchor>
              <Anchor to={"#"}>logout</Anchor>
              </div>
          </nav>
          )
          :
        <div className="none">
          <a href="#">Home</a>
          <a href="#">My comics</a>
          <a href="#">Logout</a>
        </div>
        }

    <a className="login-button" href="#">Sing in</a>   
 

  </nav>
  )
}

