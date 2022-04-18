import { configureStore } from '@reduxjs/toolkit';
import AppReducer from './appReducer';

export const store =  configureStore({
    reducer: {
        app: AppReducer
    }
})