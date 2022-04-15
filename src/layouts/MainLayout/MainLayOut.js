
import css from './MainLayout.module.css'
import {Outlet, Link, useNavigate} from "react-router-dom"


const MainLayOut = () => {
    return (
        <div>
            <div className={css.header}>
            <Link to={'/home'}>Home</Link>
            <Link to={'/users'}>Users</Link>
            <Link to={'/posts'}>Posts</Link>
            <Link to={'/about'}>About</Link>
            </div>
            <hr/>

            <Outlet/>
        </div>

    );
};

export {MainLayOut};