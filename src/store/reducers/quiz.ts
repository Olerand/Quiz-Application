import { initialState as defaultState } from "../database";
import { createSlice } from "@reduxjs/toolkit";

export interface Question {
  title: string;
  answer: number;
  options: string[];
  userAnswer: number | null;
}

export interface Quiz {
  name: string;
  description: string;
  imgUrl: string;
  date: string;
  points: number;
  userPoints: number;
  done: boolean;
  text: string;
  trophyUrl: string;
  questions: Question[];
}


const getInitialState = (): Quiz[] => {
  const storedState = localStorage.getItem('quizState');
  if (storedState) {
    try {
      const parsedState = JSON.parse(storedState);
      console.log('Loaded state from localStorage:', parsedState);
      return parsedState;
    } catch (error) {
      console.error('Error parsing stored state:', error);
      return defaultState;
    }
  }
  console.log('Using default state');
  return defaultState;
};

const quizSlice = createSlice({
  name: "quiz",
  initialState: getInitialState(),
  reducers: {
    setDoneQuiz(state, action) {
      return state.map(quiz =>
        quiz.name === action.payload ? { ...quiz, done: true } : quiz
      );
    },
    setUserAnswer(state, action) {
      const { quizName, questionIndex, userAnswer } = action.payload;
      state.map(quiz=>{
        quiz.questions = quiz.questions.map((q, i) =>
          i === questionIndex ? { ...q, userAnswer } : q
        );
      });
    },
    setUserPoints(state, action) {
      const { quizName, points } = action.payload;
      const quiz = state.find(q => q.name === quizName);
      if (quiz) {
        quiz.userPoints = points;
      }
    },
  },
});

export const { setDoneQuiz, setUserAnswer, setUserPoints } = quizSlice.actions;
export default quizSlice.reducer;
