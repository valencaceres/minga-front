import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllComics = createAsyncThunk(
    "getAllComics",
    async () =>{
        try{
            let allcomics = await axios.get(`http://localhost:8000/api/comics`)
            
            return {
                success: true ,
                response: {
                    allcomics:allcomics.data.response
                }
            }
        } catch (error) {   
            return {
                success:false,
                response:{error:error.message}
            }
        }
    }
)

const allComicsActions = { getAllComics }

export default allComicsActions