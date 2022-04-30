import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

let initialState = {
    cars: [],
    status: null,
    formErrors: {},
    carForUpdate: null
};

const getAll = createAsyncThunk(
    'getAll',
    async () => {
        const {data} = await carService.getAll()
        return data
    }
);

const deleteById = createAsyncThunk(
    'deleteById',
    async ({id}, {
        dispatch, rejectWithValue
    }) => {
        try {
            await carService.deleteById(id)
            dispatch(deleteCarById({id}));
        } catch (e) {
            return rejectWithValue({status: e.message})
        }
    }
);const updateById = createAsyncThunk(
    'updateById',
    async ({id, car}, {
        dispatch, rejectWithValue
    }) => {
        try {
            await carService.updateById(id)
            dispatch(updateCarById({id, car}));
        } catch (e) {
            return rejectWithValue({status: e.message})
        }
    }
);

const create = createAsyncThunk(
    'create',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            //dispatch(create({car:data}))
            return data
        } catch (e) {
            return rejectWithValue({status: e.message, formErrors: e.response.data})
        }

    }
)
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        create: (state, action) => {
            state.cars.push(action.payload)
        },
        deleteCarById: (state, action) => {
            const index = state.cars.findIndex(car=>car.id === action.payload.id);
            state.cars.splice(index,1);
        },
        updateCarById: (state, action) => {
            const index = state.cars.findIndex(car=>car.id === action.payload.id);
            state.cars[index] = {...state.cars[index],...action.payload.car}
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload.car
        }

    },
    extraReducers: {
        [getAll.pending]: (state, action) => {
            state.status = 'pending'
        },
        [getAll.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAll.rejected]: (state, action) => {
            state.status = 'rejected'
        },
        [create.fulfilled]: (state, action) => {
            state.cars.push(action.payload)
            state.status = "completed"
        },
        [create.rejected]: (state, action) => {
            const {status, formErrors} = action.payload;
            state.status = status;
            state.formErrors = formErrors
        }
    }

});


const {reducer: carReducer, actions: {deleteCarById, updateCarById, setCarForUpdate}} = carSlice

const carActions = {
    getAll,
    create,
    deleteById,
    updateById,
    setCarForUpdate
}


export {
    carReducer,
    carActions
}