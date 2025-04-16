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
    text:string
    questions:Question[]


}




const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setDoneQuiz(state,action){
      
    }
  },
});

export const {  } = quizSlice.actions;
export default quizSlice.reducer;
