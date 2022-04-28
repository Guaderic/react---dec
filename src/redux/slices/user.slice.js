import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users:[]
};

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        add:(state,actions) => {
            const {name} = actions.payload
            const newUser = {id: new Date().getTime(), name}
            state.users.push(newUser)

        }
    }

})

const {reducer: userReducer, actions:{add}} = userSlice

export default userReducer
export const userActions = {
    add
}