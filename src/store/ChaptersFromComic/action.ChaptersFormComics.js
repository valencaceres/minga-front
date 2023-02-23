import { createAction } from "@reduxjs/toolkit";

const chaptersFromComic = createAction(
    "chaptersFromComic", 
    (data ) => {
       console.log(data) 
        return {payload: data}
    }
)
const chaptersFromComicActions = {chaptersFromComic}

export default chaptersFromComicActions