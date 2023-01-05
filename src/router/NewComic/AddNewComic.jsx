/* import React, { useState } from 'react';


export default function Formulario() {
  const [valor, setValor] = useState('');
  const [error, setError] = useState('');

  function manejarEnvio(event) {
    event.preventDefault();

    if (valor.trim()) {
      // Enviar formulario
      setValor('');
    } else {
      setError('Por favor, ingresa un valor válido');
    }
  }

  return (
    <form onSubmit={manejarEnvio}>
      <label>
        Valor:
        <input value={'Text'} onChange={event => setValor(event.target.value)} />
      </label>
      <button type="submit">Enviar</button>
      {error && <p>{error}</p>}
    </form>
  );
}
 */

import React, { useRef } from "react";
import "./addnewcomic.css";
import axios from "axios"


const AddNewComic = () => {

    const inputAuthorId = useRef("")
    const inputCompanyId = useRef("")
    const inputTitle = useRef("")
    const inputPhoto = useRef("")
    const inputDescription = useRef("")
    const inputCategory = useRef("")


    let storeData = (e) => {
        e.preventDefault()

        let data = {
            author_id: inputAuthorId?.current?.value,
            company_id: inputCompanyId?.current?.value,
            title: inputTitle?.current?.value,
            photo: inputPhoto?.current?.value,
            description: inputDescription?.current?.value,
            category: inputCategory?.current?.value 
        }
        axios.post("http://localhost:8000/api/comics", data)
        .then(e=>console.log(e))
        .catch(error=>console.log(error))
    }

    return (
        <form onSubmit={storeData}>
            <label htmlFor="author_id">
                Author id's
                <input 

                    type="id"
                    id="author_id" 
                    placeholder="insert Author id"
                    ref={inputAuthorId}
                />
            </label>
            <label htmlFor="company_id">
                Company Id
                <input 

                    type="id"
                    id="company_id"
                    placeholder="insert Company Id" 
                    ref={inputCompanyId}
                />
            </label>
            <label htmlFor="title">
                Title
                <input 

                    type="text"
                    id="title"
                    placeholder="insert title" 
                    ref={inputTitle}
                />
            </label>
            <label htmlFor="photo">
                Photo
                <input 

                    type="url"
                    id="photo"
                    placeholder="insert photo" 
                    ref={inputPhoto}
                />
            </label>
            <label htmlFor="description">
                Description
                <input 

                    type="text"
                    id="description"
                    placeholder="insert description" 
                    ref={inputDescription}
                />
            </label>
            <label htmlFor="category">
                Category
                <input 

                    type="id"
                    id="category"
                    placeholder="insert category" 
                    ref={inputCategory}
                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default AddNewComic