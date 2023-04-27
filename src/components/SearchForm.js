import { connect } from 'react-redux'
import {searchMovie, fetchMovies} from '../actions'
import './SearchForm.css'

const SearchForm = (props) => {
    const handleChange = (e) => {
        props.search(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.fetchMovies(props.searchText)
    }
    // console.log(props.searchResult)
    return (
        <form onSubmit={handleSubmit} id='searchform'>
            <input type="text" placeholder="film name" onChange={(e) => {
                props.fetchMovies(e.target.value);
                handleChange(e);
                }}
            value = {props.searchText}
            />
            {/* <button type="submit">Search</button> */}
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        searchText : state.text,
        searchResult : state.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        search : (input) => dispatch(searchMovie(input)),
        fetchMovies : (txt) => dispatch(fetchMovies(txt))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)