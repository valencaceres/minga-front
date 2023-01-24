import React, { useEffect, useRef, useState } from "react";
import "./maincomics.css";
import ComicsCategories from "./ComicsCategories";
import { useDispatch, useSelector } from "react-redux";
import comicsActions from "../../store/comics/actions";
import ComicsCards from "./ComicsCards";
import Navbar from "../../layouts/navbar/NavBar";
/* import  myComicsAction  from '../../store/mycomics/actions' */

const { getComics } = comicsActions;
/* const {getMycomics} = myComicsAction */
        

const Maincomics = () => {
/* 
    let token = useSelector((store)=> store.auth.token)
    console.log(token); */


    const comicStore = useSelector((store) => store.comics.comics);
    console.log(comicStore);
    const text = useSelector((store) => store.comics.text);
    useSelector((store) => store.comics);
    const inputCategory = useSelector(
    (store) => store.filterCategoryComic.filterCategory
    );

    const [load, setLoad] = useState(false);
    const dispatch = useDispatch();
    const inputText = useRef(text);

    const lengthOfComics = comicStore;
    console.log(lengthOfComics);

    const [pages, setPages] = useState(1);
    const next = () => {
        setPages(pages + 1);
    };
    const prev = () => {
        setPages(pages - 1);
    };

    useEffect(() => {
        dispatch(
            getComics({
                inputText: inputText.current?.value,
                inputCategory: inputCategory.join(","),

                pages: pages,
            })
        );
    }, [load, inputCategory, pages]);



    return (
        <main className="mainn">
            <div className="nav">
            <Navbar/>
            </div>
            <div className="main-b">
                <div className="section2">
                    <h1>Nombre del Author/Company</h1>
                    <div className="input-wrapper">
                        <input
                            ref={inputText}
                            onKeyUp={() => setLoad(!load)}
                            type="text"
                            className="search-text-input"
                            placeholder="find your comic here"
                            id="search"
                            defaultValue={text}
                        />
                    </div>
                </div>
            </div>
            <div className="comics-containerr">
                <div className="explore-container">
                    
                </div>
                
                    <ComicsCategories />
                
                <div className="container-cards">
                    <ComicsCards />
                </div>
                <div className="container-button">
                    <div>
                        {pages === 1 ? null : (
                            <button onClick={prev} className="botonnextprev">
                                prev
                            </button>
                        )}
                    </div>
                    <div>
                        {lengthOfComics?.length < 10 ? null : (
                            <button onClick={next} className="botonnextprev">
                                next
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Maincomics;
