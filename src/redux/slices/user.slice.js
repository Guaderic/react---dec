import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services";

const initialState = {
    users:[]
};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async ()=>{
        const {data} = await userService.getAll();
        return data
    }
);

const userSlice = createSlice({
    initialState,
    name:'userSlice',
    reducers:{},
    extraReducers:{
        [getAll.fulfilled]:{

        }
    }

});

const {reducer: usersReducer, actions:{}} = userSlice;

const usersActions = {
        getAll
}

export {
    usersReducer,
    usersActions
}