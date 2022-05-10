import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {userService} from "../../services";
import {usersActions} from "../../redux/slices/user.slice";
import {User} from "../User/User";

const Users = () => {
    const {users} = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(usersActions.getAll())
    },[])
    return (
        <div>
            {users.map(user=> <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};