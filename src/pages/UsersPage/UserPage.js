import {useEffect, useState} from "react";


import {userService} from "../../services/user.service";
import {User} from "../../components/User/User";
import {Outlet} from "react-router-dom";

const UserPage = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        userService.getAll().then(({data})=>setUsers(data))
    },[])
    return (
        <div style={{display:'flex'}}>
            <div>{users.map((user)=> <User key={user.id} user={user}/>)}</div>
                <div><Outlet/></div>
        </div>

    );
};

export {UserPage}