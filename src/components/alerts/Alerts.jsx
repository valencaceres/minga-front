import React from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
 

export default function Alerts() {
    let view = useSelector(store => store.alertReducer.view)
    let messages = useSelector(store => store.alertReducer.messages)
    console.log(view)
    if(view){
    typeof messages === "string"? messages : messages = messages?.map(message => message.message).join()
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
    }/* else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    } */

  return (

    <div>

    </div>

  )
}
