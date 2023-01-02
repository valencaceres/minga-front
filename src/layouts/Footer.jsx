import React from 'react'
import { Link as Anchor } from 'react-router-dom'
export default function Footer() {
  return (
    <div>          
    <footer>
    <div className="section-footer">
      <img className="logo"src="/assets/logo.png" alt="logo"/>
      <p>Comics</p>
    </div>
    <p>©2022 Comic App.</p>
    <div className="pages">
      <h3>Pages</h3>
      <Anchor to={`/comics`}>Comics</Anchor>
    </div>
  </footer>
  </div>
  )
}
