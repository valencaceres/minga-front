import { createReducer } from "@reduxjs/toolkit";
import chaptersFromComicActions from "../ChaptersFromComic/action.ChaptersFormComics";

const {chaptersFromComic} = chaptersFromComicActions

const initialState = {
    chaptersFromComicValue: []
}

const chapterFromComicReducer = createReducer(
    initialState, 
    (builder) => {
        builder.addCase(
            chaptersFromComic,
                (state, action) => {
                 
                    if(state.chaptersFromComicValue.includes(action.payload)){
                        const newState = {
                            chaptersFromComicValue: state.chaptersFromComicValue.filter((id)=>id !== action.payload)
                            
                        }
                        
                        console.log(newState)
                        return newState
                        
                    }else{
                        state.chaptersFromComicValue.push(action.payload)
                    }
                    
                }
            )
    }
)

export default chapterFromComicReducer