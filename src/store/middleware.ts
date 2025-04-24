import { Middleware } from "@reduxjs/toolkit";

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  const currentState = store.getState().quiz;
  const result = next(action);
  const newState = store.getState().quiz;
  if (JSON.stringify(currentState) !== JSON.stringify(newState)) {
    localStorage.setItem('quizState', JSON.stringify(newState));
    console.log('State updated in localStorage:', newState);
  }
  
  return result;
};

export default loggerMiddleware;
