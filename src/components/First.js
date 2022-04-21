import {useLocation, useParams} from "react-router-dom";

const First = () => {
    //dataLift(23828)
    const {id} = useParams();
    const location = useLocation();
    console.log(location.state)
    return (
        <div>
            First
            <div>{id}</div>
        </div>
    );
};

export {First};