import { initialState } from "../database";
import { createSlice } from "@reduxjs/toolkit";



export interface Question{
    title:string
    answer:number
    options:string[]
}


export interface Quiz {
    name:string,
    description:string
    imgUrl:string
    date:string,
    points:number
    done:boolean,
    questions:Question[]


}




const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    
  },
});

export const {  } = quizSlice.actions;
export default quizSlice.reducer;
