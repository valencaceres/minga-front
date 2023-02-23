import { configureStore } from "@reduxjs/toolkit";
import alertReducer from './alert/reducers.js'
import comicsReducers from "./comics/reducers.js";
import filterCategoryReducer from "./comicCategories/reducers.js";
import comicReducer from "./comic/reducers.js";
import chapterReducer from "./chapter/reducers.js";
import pages   from "./chapter/reducers.js";
import comicComp from "./ComicsFromCompany/reducers.js";
import comicsFromCategoryReducer from './ComicsFromCategories/reducers.js'
import authReducer from './auth/reducers';
import updateReducer from "./authorOrCompany/reducers.js";
import donationReducers from "./mercadopago/reducers.js";
import myComicReducer from "./mycomics/reducers.js";
import category from './mycomics/reducers.js'


const store = configureStore({
  
    reducer: {
        alertReducer,
        comic:comicReducer,
        chapters: chapterReducer,
        pages,
        comics: comicsReducers,
        filterCategoryComic: filterCategoryReducer,
        comicComp,
        comicsFromCategoryReducer,
        auth: authReducer,
        data: updateReducer,
        donation: donationReducers
        myComic: myComicReducer,
        category
    }
  })





export default store