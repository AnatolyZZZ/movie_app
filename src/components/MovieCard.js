import './MovieCards.css'
import {Link} from 'react-router-dom'
export const MovieCard = (props) => {
    return (<div className="filmCard">
        <h2>{props.film.Title}</h2>
        <img src={props.film.Poster}/>
        <p>{props.film.Year}</p>
        <Link to={`/${props.film.imdbID}`}><button>To the film</button></Link>
    </div>)
}