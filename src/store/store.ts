import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import quizReducer from './reducers/quiz';


const rootReducer = combineReducers({
  quiz: quizReducer,
});


const localStorageMiddleware: Middleware = store => next => action => {
  const result = next(action);
  localStorage.setItem('quizState', JSON.stringify(store.getState().quiz));
  return result;
};


const getInitialState = () => {
  const storedState = localStorage.getItem('quizState');
  return storedState ? JSON.parse(storedState) : undefined;
};

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: {
      quiz: getInitialState()
    },
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(localStorageMiddleware)
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
