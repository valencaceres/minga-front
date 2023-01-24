import { createReducer } from "@reduxjs/toolkit";
import myComicsAction from "./actions";

const { getMycomics } = myComicsAction
const initialState = { myComics: [] ,  message: ""};

const myComicReducer = createReducer(initialState, (builder) =>  {
    builder
    .addCase(getMycomics.fulfilled, (state, action) => {

        let newState = {
            myComics: action.payload.response,
            message: action.payload.message            
        }
        return newState

    })
    .addCase(getMycomics.rejected, (state, action) => {
        let newState =  {
            message: "ERROR"
        }
        return newState
    })
})

export default myComicReducer
