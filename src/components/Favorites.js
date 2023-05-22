import { useEffect } from "react";
import { MovieContainer } from "./MovieContainer";
import { useState } from "react";

export const Favorites = () => {
    const [favFilms, setFav] = useState([]);
    useEffect(()=>{
        const fromStorage = localStorage.getItem('favorites')
        if (fromStorage) {
            setFav(JSON.parse(fromStorage));
        }
    }, [])
    

    return <>
    {favFilms.length === 0 ? <h1>No favorite films added</h1> : <h1>Your favorite films</h1>}
    <MovieContainer films={favFilms}/>

    </>
}