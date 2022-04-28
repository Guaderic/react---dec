import {useRef} from "react";
import {useDispatch} from "react-redux";
import {userActions} from "../redux/slices";

const Form = () => {
    const nameInput = useRef()
    const dispatch = useDispatch();
    return (
        <div>
            <input type="text" ref={nameInput}/>
            <button onClick={()=>dispatch(userActions.add({name: nameInput.current.value}))}>ADD</button>
        </div>
    );
};

export {Form};