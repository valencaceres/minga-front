import { configureStore } from "@reduxjs/toolkit";
import alertReducer from './alert/reducers.js'
import comicsReducers from "./comics/reducers.js";
import filterCategoryReducer from "./comicCategories/reducers.js";
import comicReducer from "./comic/reducers.js";
import chapterReducer from "./chapter/reducers.js";
import pages   from "./chapter/reducers.js";
import comicComp from "./ComicsFromCompany/reducers.js";
import comicsFromCategoryReducer from './ComicsFromCategories/reducers.js'
<<<<<<< HEAD
import allcomicsreducer from "./getAllComics/reducer.getAllComics.js";
import chapterFromComicReducer from "./ChaptersFromComic/reducer.ChaptersFromComics.js";
import getIdReducer from "./getIdAction/getIdReducer.js"
=======
import authReducer from './auth/reducers';
>>>>>>> 55f0a3d1c40640fab9fb305177103937a9bebb6e

const store = configureStore({
    reducer: {
        alertReducer,
        comic:comicReducer,
        chapters: chapterReducer,
        pages,
        comics: comicsReducers,
        filterCategoryComic: filterCategoryReducer,
        comicComp ,
        comicsFromCategoryReducer,
<<<<<<< HEAD
        allComics : allcomicsreducer ,
        chapterFromComicReducer,
        id: getIdReducer 
=======
        auth: authReducer
>>>>>>> 55f0a3d1c40640fab9fb305177103937a9bebb6e
    }
  })





export default store