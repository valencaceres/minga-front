import React, { useEffect, useState } from "react";
import "./comicscards.css";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./modal";
import myComicsAction from "../../store/mycomics/actions";
import Swal from "sweetalert2";
import axios from "axios";

const ComicsCards = () => {
  const { getMycomics /* , deleteMycomics */ ,editMycomics} = myComicsAction;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const token = localStorage.getItem("token");

  const { myComics } = useSelector((store) => store.myComic);
  console.log(myComics);




  const deleted = () => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your Comics has been delete",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const deleteComics = async (id) => {
    try {
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      await axios.delete(`http://localhost:8000/api/comics/${id}`, headers);

      /*  dispatch(deleteMycomics({token})); */

      dispatch(getMycomics({ token }));
    } catch (error) {
      if (error.response) {
        console.log("response");
        console.log(error.response);
      } else if (error.request) {
        console.log("request");
        console.log(error.request);
      } else if (error.message) {
        console.log("message");
        console.log(error.message);
      }

      console.log(error);
    }
  };

  const handleClick = (e) => {
    Swal.fire({
      title: "Delete",
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "Cancel",
    }).then((resultado) => {
      if (resultado.value) {
        // Hicieron click en "Sí"
        deleteComics(e.target.value);
        deleted();
      } else {
        // Dijeron que no
        console.log("*Comics not delete*");
      }
    });
  };
  useEffect(() => {
    dispatch(getMycomics({ token }));
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const dispatch = useDispatch();

  return (
    <>
      {myComics?.map((card, index) => {
        return (
          <div className="card">
            <div className="rectangle"></div>
            <div className="textCard">
              <h2 className="tittleCard">{card.title}</h2>
              <p className="categoryText">{card.category}</p>
              <div>
                <button className="butonEdit" onClick={openModal}>
                  Edit
                </button>
                <Modal isOpen={isModalOpen} onClose={closeModal} />
                <button
                  className="butonDelete"
                  value={card._id}
                  onClick={handleClick}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="divCard">
              <img className="imagen-card" src={card.photo} alt="" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ComicsCards;
