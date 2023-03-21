import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE ,LOADING} from '../actions'
const initialState = {
    text: '',
    movies: [],
    loading: true,
    movie: {}
}

export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SEARCH_MOVIE :
            return {...state, text : action.payload}
        case FETCH_MOVIES :
            return {...state, movies : action.payload}
        case FETCH_MOVIE :
            return {...state, movie : action.payload, loading:false}
        case LOADING :  
            return {...state, loading : true}
        default :
            return {...state}

    }
}