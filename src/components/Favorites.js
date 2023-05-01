// import { useSelector } from "react-redux";
import { useEffect } from "react";
import { MovieContainer } from "./MovieContainer";
import {Link} from 'react-router-dom';
import { useState } from "react";

export const Favorites = () => {
    // const favFilms = useSelector(state => state.favorites);
    // console.log('films in favorites', favFilms);
    const [favFilms, setFav] = useState([]);
    useEffect(()=>{
        const fromStorage = localStorage.getItem('favorites')
        if (fromStorage) {
            setFav(JSON.parse(fromStorage));
        }
        // console.log('films in favorites', favFilms);
    }, [])
    

    return <>
    {favFilms.length === 0 ? <h1>No favorite films added</h1> : <h1>Your favorite films</h1>}
    <MovieContainer films={favFilms}/>
    {/* <h4><Link to="/">Back to search</Link></h4> */}
    </>
}