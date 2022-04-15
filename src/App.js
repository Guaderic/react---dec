//import {Button} from "./components";
import {Routes,Route, Navigate} from "react-router-dom";
import {MainLayOut} from "./layouts";
import {AboutPage, HomePage, NotFoundPage, PostPage, SinglePostPage, UserPage} from "./pages";


function App() {
  return (
      <Routes>
        <Route path={'/'} element={<MainLayOut/>}>
            <Route index element={<Navigate to={'home'}/>} />
            <Route path={'home'} element={<HomePage/>}/>
            <Route path={'users'} element={<UserPage/>}/>
            <Route path={'posts'} element={<PostPage/>}>
                <Route path={':id'} element={<SinglePostPage/>}/>
            </Route>
            <Route path={'about'} element={<AboutPage/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>

        </Route>

        </Routes>
  );
}

export default App;
