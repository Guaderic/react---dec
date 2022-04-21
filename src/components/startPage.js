import {Link, Outlet} from "react-router-dom";

const StartPage = () => {
    const user = {id: 1, name: 'Max', username: 'Kokos'}
    return (
        <div>

            StartPage
            <Link to={'/about/8'} state={user}>to About</Link>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {StartPage};