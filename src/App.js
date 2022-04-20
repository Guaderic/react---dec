import {Route, Routes} from "react-router-dom";
import {CountOne} from "./components";

function App() {
    return (
        <Routes>
            <Route>
                <CountOne/>
            </Route>
        </Routes>
    );
}

export default App;
