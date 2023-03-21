import {useSelector} from 'react-redux'
import { MovieCard } from './MovieCard'
import './MovieCards.css'
export const MovieContainer = () => {
    const films = useSelector((state) => state.movies)
    console.log(films)
    return (
    (films.length === 0) ? <h1>Nothing found</h1> :
    <div className='list'>
        {films.map(elt => <MovieCard key={elt.imdbID} film={elt}/>)}
    </div>)
}