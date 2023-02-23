import {  createReducer } from "@reduxjs/toolkit"
import allComicsActions from "./action.getAllComics"


const { getAllComics }=  allComicsActions
const initialState = {
    allcomics: [],
    message: ""
}

const allComicsReducers = createReducer(
    initialState,
    (builder) => { builder
        .addCase(
            getAllComics.fulfilled,
            (state,action) =>{
                let newState = {
                    allcomics: action.payload.response.allcomics
                    
                    
                }
                return newState
            }
        )
    }
)

export default allComicsReducers