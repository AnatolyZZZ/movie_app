import { useSelector, useDispatch } from "react-redux"
import { setFavorites } from "../actions";
import {faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons'
import {faHeart as normalHeart} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './FavBtn.css'


export const FavBtn = (props) => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    // console.log(favorites)
    let ind = favorites.findIndex(elt => elt.imdbID === props.film.imdbID);
    const addF = () => {
        const new_fav = [...favorites]
        new_fav.push(props.film);
         dispatch(setFavorites(new_fav));
        localStorage.setItem("favorites", JSON.stringify(new_fav))
    }
    const deleteF = () => {
        const new_fav = [...favorites]
        // console.log('new_fav before', new_fav, 'ind ', ind)
        new_fav.splice(ind, 1);
        // console.log('new_fav after', new_fav)
         dispatch(setFavorites(new_fav));
        // console.log('favorites after dispatch', favorites)
        localStorage.setItem("favorites", JSON.stringify(new_fav))
    }

    return ind === -1 ? <span onClick={(e) => addF()} className="heart"><FontAwesomeIcon icon={normalHeart}/></span> : <span onClick={(e) => deleteF()} className="heart"><FontAwesomeIcon icon={solidHeart}/></span>
}