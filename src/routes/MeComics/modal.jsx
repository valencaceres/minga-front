import React, { useRef }  from 'react';
import './modal.css'
import { useDispatch } from 'react-redux'


const Modal = ({ isOpen, onClose }) => {
    const dispatch = useDispatch()
    const inputTitle = useRef("");
    const inputPhoto = useRef("");
    const inputDescription = useRef("");
    const inputCategory = useRef("");
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
    <div className="modal-content">
    <form className="form" >
                
                <label className='labelform' htmlFor="title">
                    
                    <input
                        className="inputt"
                        type="text"
                        id="title"
                        placeholder="insert title"
                        ref={inputTitle}
                    />
                </label>
                <label className='labelform' htmlFor="photo">
                    
                    <input
                        className="inputt"
                        type="url"
                        id="photo"
                        placeholder="insert photo"
                        ref={inputPhoto}
                    />
                </label>
                <label className='labelform' htmlFor="description">
                    
                    <input
                        className="inputt"
                        type="text"
                        id="description"
                        placeholder="insert description"
                        ref={inputDescription}
                    />
                </label>
                <label className='labelform' htmlFor="category">
                    
                    <input
                        className="inputt"
                        type="text"
                        id="category"
                        placeholder="insert category"
                        ref={inputCategory}
                    />
                </label>
                <input className="ssubmit" type="submit"value="Edit" />
            </form>
      <button className="modal-close-btn" onClick={onClose}>Close</button>
    </div>
  </div>
  );
}

export default Modal;