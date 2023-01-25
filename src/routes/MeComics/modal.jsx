import React, { useRef, useEffect, useState } from "react";
import "./modal.css";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";
import myComicsAction from '../../store/mycomics/actions'

const Modal = ({ isOpen, onClose, data }) => {
  const {editMycomics} = myComicsAction
  const token = localStorage.getItem("token");
  const dataForm = useRef()
  const editSucces = () => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const dispatch = useDispatch();

/*   const data = () => {
    const inputTitle = useRef("");
    const inputPhoto = useRef("");
    const inputDescription = useRef("");
    const inputCategory = useRef("");
    return ()
  } */
/*   const inputTitle = useRef("");
  const inputPhoto = useRef("");
  const inputDescription = useRef("");
  const inputCategory = useRef("");
 */
  if (!isOpen) {
    return null;
  }

  const saveData = (e) => {
    e.preventDefault()
    let form = {}
    Array.from(dataForm.current).forEach((element) => element.value && (form = element.value))
    let response = dispatch(editMycomics({data: form, token}))
    console.log(response)
  }

/*  const [categories, setCategories] = useState([])

  const getData = async()=>{
      try {
          const response = await axios.get("http://localhost:8000/api/categories")
          setCategories(response.data.response)
          
      } catch(err){
          console.log(err)
      }
  } 

useEffect( () => {
      getData()
      
  },[]) 
 */



  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form className="form" onSubmit={saveData} ref={dataForm}>
          <h2 className="h2form">Edit Comic</h2>
          {console.log(data)}
          <label className="labelform" htmlFor="title">
            <input
              defaultValue={data.title}
              className="inputt"
              type="text"
              id="title"
              placeholder="insert title"
                          />
          </label>
          <label className="labelform" htmlFor="photo">
            <input
              defaultValue={data.photo}
              className="inputt"
              type="url"
              id="photo"
              placeholder="insert photo"
                          />
          </label>
          <label className="labelform" htmlFor="description">
            <input
              defaultValue={data.description}
              className="inputt"
              type="text"
              id="description"
              placeholder="insert description"
                          />
          </label>
          <label className="labelform" htmlFor="category">
            <input
              defaultValue={data.category}
              className="inputt"
              type="text"
              id="category"
              placeholder="insert category"
                          />
          </label>
          <input
            onClick={editSucces}
            className="ssubmit"
            type="submit"
            value="Edit"
          />
          <button className="modal-close-btn" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
