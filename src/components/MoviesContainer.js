import React, { Component } from 'react';
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer';
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer';

class MoviesContainer extends Component {
    render() {
        return (
            <div>
                <SearchableMovieReviewsContainer />
                <LatestMovieReviewsContainer />
            </div>
        );
    }
}

export default MoviesContainer;
