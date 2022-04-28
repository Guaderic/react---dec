import {combineReducers, configureStore} from "@reduxjs/toolkit";


import counterReducer from "./slices/counter.slice";
import userReducer from "./slices/user.slice";
import catsReducer from "./slices/cat.slice";
import dogsReducer from "./slices/dog.slice";


const rootReducer = combineReducers({
        counter: counterReducer,
        user: userReducer,
        cats: catsReducer,
        dogs: dogsReducer
});


const store = configureStore({
    reducer:rootReducer
});

export default store;

