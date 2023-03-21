import {useEffect} from 'react'
import { fetchMovie, loading} from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import {useParams, Link} from 'react-router-dom'
import "./FilmPage.css"
import loading_ from '../images/loading.gif'

export const MoviePage = (props) => {
    let {id} = useParams()

    const film = useSelector(state => state.movie);
    const load = useSelector (state => state.loading)
    const dispatch = useDispatch();
    const loadFilm = () => {
        dispatch(fetchMovie(id))
    }
    useEffect(()=>loadFilm(), [])
 
    // console.log(load);
    // console.log(film);
    return(<> { 
    load ? <><h1>Loading...</h1><img src={loading_}/></> :
            <div className='Film'>
                <div className='MainInfo'>
                    <div className='imageDiv'>
                        <img src={film.Poster}/>
                    </div>
                   
                    <div className='Info'>
                        <h1>{film.Title}</h1>
                        <div className='Short'>
                            <div><span style={{fontWeight : "bold"}}>Genre:</span> {film.Genre}</div>
                            <div><span style={{fontWeight : "bold"}}>Released:</span> {film.Released}</div>
                            <div><span style={{fontWeight : "bold"}}>Rated:</span> {film.Rated}</div>
                            <div><span style={{fontWeight : "bold"}}>IMDB rating:</span> {film.imdbRating}</div>
                            <div><span style={{fontWeight : "bold"}}>Director:</span> {film.Director}</div>
                            <div><span style={{fontWeight : "bold"}}>Writer:</span> {film.Writer}</div>
                            <div><span style={{fontWeight : "bold"}}>Actors:</span> {film.Actors}</div>
                        </div>
                    </div>
                </div>
                <div className='About'>
                    <p className='about'>About</p>
                    <p>{film.Plot}</p>
                    <h2><Link to="/">Back to search</Link></h2>
                </div>
            </div>
    }
</>)
    
}