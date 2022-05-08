import {AuthForm} from "../../components";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {authActions} from "../../redux";

const RegisterPage = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(authActions.setError())
    },[])
    return (
        <div>
            <AuthForm/>
        </div>
    );
};

export {RegisterPage};