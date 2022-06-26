import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super()
        this.state = {
            reviews: [],
            searchInput: ''
        }
    }

    setFetchData = (event) => {
        event.preventDefault();
        event.persist()
        const NYT_API_KEY = 'iFOiLVzn1LoP46bEffg3qOG5BVE5bZwI';
        const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}&query=${this.state.searchInput}`

        fetch(URL)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    reviews: response.results,
                }, () => console.log(this.state.reviews))
            })
            .catch(error => { console.log(error) })
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        }, () => console.log(this.state.searchInput))
    }

    listData = () => {
        const movieSearch = this.state.reviews.map((entry, index) => {
            return <MovieReviews key={index} movieFetchResponse={entry} />
        })
        return movieSearch
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <form onSubmit={this.setFetchData}>
                    <input type="text" name="searchInput" onChange={this.handleChange} value={this.state.searchInput}></input>
                    <button type="submit" value="Submit">Search Movie Title</button>
                </form>
                {this.listData()}
            </div>
        );
    }
}

export default SearchableMovieReviewsContainer;

