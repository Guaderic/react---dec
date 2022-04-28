import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {actionsCat} from "../redux/slices";


const CatsForm = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch()
    const {catForUpdate} = useSelector(({cats}) => cats)

    useEffect(()=>{
        if (catForUpdate){
            setName(catForUpdate.name)
        }
    },[catForUpdate])

    const save = ()=>{
        if(catForUpdate){
            dispatch(actionsCat.updateCat({name, id: catForUpdate.id}))
        }else {
            dispatch(actionsCat.addCat({name}))
        }

        setName('')
    }
    return (
        <div>
            <label>Cat name:<input type="text" onChange={(e) => setName(e.target.value)}
                                                                                          value={name}  /></label>
            <button onClick={()=>{save()}}>Save</button>
        </div>
    );
};

export {CatsForm};