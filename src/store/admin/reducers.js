import { createReducer } from "@reduxjs/toolkit";
import adminActions from "./actions";

const { getActiveAuthors,getActiveCompanies} = adminActions

const initialState = {authors: [],  message: ""}
const initialState2 = { companies: [],message: "" }


const adminReducers = createReducer(initialState, (builder) =>{
    builder
        .addCase(getActiveAuthors.fulfilled, (state, action)=>{
            let newState = {
                authors: action.payload.response.authors,
                message: action.payload.message
            }
            return newState
        })
    });
    const adminReducers2 = createReducer(initialState2, (builder) => {
        builder
        .addCase(getActiveCompanies.fulfilled, (state, action)=>{
        let newState = {
            companies: action.payload.response.companies,
            message: action.payload.message
        }
        return newState
    })
});


const adminReducerAll = {  adminReducers, adminReducers2}


export default adminReducerAll