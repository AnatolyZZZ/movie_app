import './MovieCards.css'
import {Link} from 'react-router-dom'
import {FavBtn} from './FavBtn.js'

export const MovieCard = (props) => {
    return (<div className="filmCard">
        <FavBtn film={props.film}/>
        <h2>{props.film.Title}</h2>
        <img src={props.film.Poster} alt='no poster available'/>
        <p>{props.film.Year}</p>
        <Link to={`/${props.film.imdbID}`}><button>To the film</button></Link>
    </div>)
}