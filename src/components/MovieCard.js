import './MovieCards.css'
import {Link} from 'react-router-dom'
import {FavBtn} from './FavBtn.js'

export const MovieCard = (props) => {
    return (<div className="filmCard">
        <FavBtn film={props.film}/>
        <div className='mainContent'>
            <h2>{props.film.Title}</h2>
            <img src={props.film.Poster} alt='no poster available'/>
            <p>{props.film.Year}</p>
        </div>
        
        <Link to={`/${props.film.imdbID}`}>To the film</Link>
    </div>)
}