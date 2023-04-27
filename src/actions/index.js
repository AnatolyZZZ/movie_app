const SEARCH_MOVIE='SEARCH_MOVIE', FETCH_MOVIES='FETCH_MOVIES', FETCH_MOVIE='FETCH_MOVIE' ,LOADING='LOADING'
export {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE ,LOADING}
export const searchMovie = (str) => {
    return {
        type : SEARCH_MOVIE,
        payload : str
    }
}

export const fetchMovies = (srch) => (dispatch) => {
    dispatch({type: LOADING})
    fetch(`https://www.omdbapi.com/?apikey=4f40cd1b&s=${srch}`)
    .then (res => res.json())
    .then (data => {
        console.log(data.Response)
        if (data.Response == "True") {
            dispatch({
                type : FETCH_MOVIES,
                payload : data.Search
            })
        } else {
            console.log("dispatching false")
            dispatch({
                type : FETCH_MOVIES,
                payload : []
            })
        }
        
    })
    .catch((err) => console.log(err))
}

export const fetchMovie = (key) => (dispatch) => {
    dispatch({type: LOADING})
        
        // loading(true)
    // console.log(`http://www.omdbapi.com/?apikey=4f40cd1b&i=${key}`)
    fetch(`https://www.omdbapi.com/?apikey=4f40cd1b&i=${key}&plot=full`)
    .then (res => res.json())
    .then (data => {
        dispatch({
            type : FETCH_MOVIE,
            payload : data
        })
        // dispatch({type: LOADING, payload : false })
        // loading(false)
    // console.log(data);
    })
    .catch((err) => console.log(err))
}

export const loading = (val) => {
    return {
        type : LOADING,
        payload : val
    }
}