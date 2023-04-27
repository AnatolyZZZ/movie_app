import {useSelector} from 'react-redux'
import { MovieCard } from './MovieCard'
import './MovieCards.css'
import loading_ from '../images/loading.gif'


export const MovieContainer = () => {
    const films = useSelector((state) => state.movies);
    const search_text = useSelector((state) => state.text);
    const load = useSelector(state => state.loading);
    console.log(films)
    return (
    (search_text === "") 
    ? <h1>Please enter something in search field</h1> 
    : 
    load 
    ? <div className='loading'><h1>Loading...</h1><img src={loading_}/></div> 
    :
        (films.length === 0) 
        ? <h1>Nothing found</h1> 
        :
        <>
            <h1>Search result:</h1>
            <div className='list'> 
                {films.map(elt => <MovieCard key={elt.imdbID} film={elt}/>)}
            </div> 
        </>
       
    )
}