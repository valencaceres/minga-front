import chapterActions from "./actions";
import { createReducer } from "@reduxjs/toolkit";


const { newChapter, getChapter ,getChapterDetails, getChapters, getChapterbyorderandcomic, deleteChapter, } = chapterActions;

const initialState = { chapters: [], message: "", chapter: [] };

const chapterReducer = createReducer(initialState, (builder) =>  {
    builder
    .addCase(newChapter.fulfilled, (state, action) => {
        let newState = {
            chapters: action.payload.response.chapter,
            message: action.payload.message,
        }
        return newState
    })
    .addCase(newChapter.rejected, (state, action) => {
        let newState =  {
            message: "ERROR"
        }
        return newState
    })
    .addCase(getChapterDetails.fulfilled, (state, action) => {
        let newState = {
            chapter: action.payload.response.chapter,
            chapters : state.chapters,
            message: action.payload.message
        }
        return newState
    })
    
    .addCase(getChapterDetails.rejected, (state, action) => {
        let newState = {
            message: "Error Loading Chapter"
        }
        return newState
    })
    .addCase(getChapterbyorderandcomic.fulfilled, (state, action)=>{
        let newState={
            chapters: action.payload.response.chapter,
            message: action.payload.message
        }
        return newState
    })

    //----------------
    .addCase(getChapters.fulfilled,
        (state, action) => {
            let newState = {
                chapters: action.payload.response.chapters,
                chapter: state.chapter,
                message: action.payload.message
            }
            return newState
        }
        )
   .addCase(getChapter.fulfilled,
        (state, action) => {
            let newState = {
                chapters: action.payload.response.chapters,
                message: action.payload.message
            }
            return newState
}
)

.addCase(deleteChapter.fulfilled, (state,action ) =>{
    return {...state}
})
})

export default chapterReducer