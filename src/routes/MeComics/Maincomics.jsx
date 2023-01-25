import React, { useEffect, useRef, useState } from "react";
import "./maincomics.css";
import ComicsCategories from "./ComicsCategories";
import { useDispatch, useSelector } from "react-redux";
import ComicsCards from "./ComicsCards";
import Navbar from "../../layouts/navbar/NavBar";
import myComicsAction from "../../store/mycomics/actions";

const { getMycomics } = myComicsAction;

const Maincomics = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(getMycomics({ token }));
  }, []);

const myMail = useSelector((store) => store.auth.mail);
const { myComics } = useSelector((store) => store.myComic);


/* console.log(myComics); */
  return (
    <main className="mainn">
      <div className="nav">
        <Navbar />
      </div>
      <div className="main-b">
        <div className="section2">
          <h1>{myMail}</h1>
        </div>
      </div>
      <div className="comics-containerr">
        <div className="explore-container"></div>
        <ComicsCategories />
        <div className="container-cards">
         {myComics.map((card, index) => <ComicsCards key={index} data={card}/> )} 
        </div>
      </div>
    </main>
  );
};

export default Maincomics;
