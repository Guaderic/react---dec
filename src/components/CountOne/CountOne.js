
import {useReducer} from "react";
import {useLocation} from "react-router-dom";

const initialState = 0;
const reducer = (state, action)=>{
    switch (action) {
        case 'increment':
            return state +1
        case 'decrement':
            return state -1
        case 'reset':
            return initialState
        default:
            return state
    }
}

const CountOne = () => {

    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={()=> dispatch('increment')}>Increment</button>
            <button onClick={()=> dispatch('decrement')}>Decrement</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
        </div>
    );
};

export  {CountOne};