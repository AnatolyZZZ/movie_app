import { connect } from 'react-redux'
import {searchMovie, fetchMovies} from '../actions'

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
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" onChange={handleChange}/>
            <button type="submit">Search</button>
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