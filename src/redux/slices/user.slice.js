import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services";

const initialState = {
    users:[]
};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async ({page})=>{
        const {data} = await userService.getAll(page);
        return data
    }
);

const userSlice = createSlice({
    initialState,
    name:'userSlice',
    reducers:{},
    extraReducers:{
        [getAll.fulfilled]:(state , action)=>{
            state.users = action.payload

        }
    }

});

const {reducer: usersReducer, actions} = userSlice;

const usersActions = {
        getAll
}

export {
    usersReducer,
    usersActions
}