import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name, username, email} = user
    return (
        <div>
            {id}---{name} <Link to={id.toString()} state={user}>get details</Link>
        </div>
    );
};

export {User};