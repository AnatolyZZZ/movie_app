import { MovieCard } from './MovieCard'
import './MovieCards.css'


export const MovieContainer = (props) => {
    // console.log('in movie container', props.films)
    return (
            <div className='list'> 
                {props.films.map(elt => <MovieCard key={elt.imdbID} film={elt}/>)}
            </div> 
    )
}