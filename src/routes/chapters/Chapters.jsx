import React from 'react'
import './chapters.css'

export default function Chapters() {
  return (
    <div>
        <h2>New Chapter</h2>
        <form action="" className='form'>
        <input type="text" placeholder='Enter your title' />
        <input type="text" placeholder='Enter your chapters'/>
        <input type="number" placeholder='Enter your page order'/>
        </form>
    </div>
  )
}
