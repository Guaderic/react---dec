import {Route, Routes} from "react-router-dom";
import {CountOne} from "./components";
import {CountTwo} from "./components/CountTwo/CountTwo";
import {First} from "./components/First";
import {StartPage} from "./components/startPage";
import {HzPage} from "./components/HZPage";

function App() {
    const dataLift = (asd) => {
        console.log(asd);
    }
    return (
        <Routes>
            <Route path={'/'} element={<StartPage/>}>
                <Route path={'hz'} element={<HzPage/>}/>
            </Route>
            <Route path={'about/:id'} element={<First/>}/>
        </Routes>
        //<First sda={'sss'} dataLift={dataLift}/>
    );
}

export default App;
