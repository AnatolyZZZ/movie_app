import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE ,LOADING, FAV} from '../actions'
const initialState = {
    text: '',
    movies: [],
    loading: true,
    movie: {},
    favorites: []
}

export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SEARCH_MOVIE :
            return {...state, text : action.payload}
        case FETCH_MOVIES :
            return {...state, movies : action.payload, loading:false}
        case FETCH_MOVIE :
            return {...state, movie : action.payload, loading:false}
        case LOADING :  
            return {...state, loading : true}
        case FAV :
            return {...state, favorites : action.payload}
        default :
            return {...state}

    }
}