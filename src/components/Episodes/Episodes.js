import {useDispatch, useSelector} from "react-redux";
import {Episode} from "../Episode/Episode";
import {useEffect} from "react";
import {episodeActions} from "../../redux";
import {useLocation, useSearchParams} from "react-router-dom";


import css from './Episodes.module.css';

const Episodes = () => {
    const {episodes, next, prev} = useSelector(state => state.episodes)
    const [query, setQuery] = useSearchParams({page: '1'});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(episodeActions.getAll({page: query.get('page')}))
    }, [query]);

    const prevPage = () => {
        const prevPage = +query.get('page') - 1;
        setQuery({page: `${prevPage}`})
    }
    const nextPage = () => {
        const nextPage = +query.get('page') + 1;
        setQuery({page: `${nextPage}`})
    }
    return (
        <div>
            <div className={css.Episodes}>{episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}</div>
            <button disabled={!prev} onClick={prevPage}>prev</button>
            <button disabled={!next} onClick={nextPage}>next</button>
        </div>
    );
};

export {Episodes};