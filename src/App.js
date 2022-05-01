import {Navigate, Route, Routes} from "react-router-dom";


import {MainLayout} from "./layouts";
import {EpisodesPage} from "./Pages/EpisodesPage/EpisodesPage";
import {CharactersPage} from "./Pages";


const App = ()=> {
  return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'episodes'}/>}/>
                <Route path={'episodes'} element={<EpisodesPage/>}/>
                <Route path={'characters'} element={<CharactersPage/>}/>
            </Route>

        </Routes>
  );
}

export {App};
