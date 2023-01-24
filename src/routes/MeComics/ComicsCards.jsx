import React, { useEffect, useState } from "react";
import "./comicscards.css";
import { useSelector } from "react-redux";
import Modal from "./modal";
import myComicsAction from '../../store/mycomics/actions.js'

const { getMycomics } = myComicsAction



const ComicsCards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getMeComics = useSelector((state) => state);
  console.log(getMeComics)
  

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { comics } = useSelector((store) => store?.comics);
  console.log(comics);

  return (
    <>
      {comics?.map((card, index) => {
        return (
          <div className="card">
            <div className="rectangle"></div>
            <div className="textCard">
              <h2 className="tittleCard">{card.title}</h2>
              <p className="categoryText">{card.category.name}</p>
              <div>
                <button className="butonEdit" onClick={openModal}>Edit</button>
                <Modal isOpen={isModalOpen} onClose={closeModal} />
                <button className="butonDelete" onClick={openModal}>Delete</button>
                <Modal isOpen={isModalOpen} onClose={closeModal} />
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
