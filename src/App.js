import {Cats, CatsForm, Counter, Dogs, DogsForm, Users} from "./components";
import {Form} from "./components/Form";
import './App.css'


function App() {
    return (
        <div>
            {/*<Counter/>*/}
            {/*<Form/>*/}
            {/*<Users/>*/}

            <div className={'flex'}>

                <DogsForm/>
                <CatsForm/>

            </div>

            <hr/>

            <div className={'flex'}>

                <Dogs/>
                <Cats/>

            </div>
        </div>
    );
}

export default App;
