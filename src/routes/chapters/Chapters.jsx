import axios from 'axios'
import React, {useRef}  from 'react'
import './chapters.css'

export default function Chapters() {
  const inputTitle = useRef('')
  const inputPage = useRef('')
  const inputOrder = useRef('')

  const saveData = (e)  => {
    e.preventDefault()
      let datos = {
        comic_id: "63b4473915f0c3b2d08b715e",
        title: inputTitle.current.value,
        pages: inputPage.current.value.split(','),
        order: inputOrder.current.value
      }
      axios.post("http://localhost:8000/api/chapters", datos)
      .then(e=>console.log(e))
      .catch(error => console.log(error))
  }
  return (
    <div className='chapters'>
        <h2 className='legend'>New Chapter</h2>
        <form onSubmit={saveData} className='form' >
        <input type="text" className='input' ref={inputTitle} placeholder='Enter your title' />
        <input type="text" className='input' ref={inputPage} placeholder='Enter your chapters'/>
        <input type="number" className='input' ref={inputOrder} placeholder='Enter your page order'/>
        <input type="submit" className='submit' value="Submit" />
        </form>
    </div>
  )
}
