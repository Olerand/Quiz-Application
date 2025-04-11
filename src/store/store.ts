import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector,TypedUseSelectorHook } from "react-redux";

const rootReducer = combineReducers(
    {
        
    }
)


const setupStore = () =>{
    return configureStore({
        reducer:rootReducer
    })
}

export type RootState  = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;