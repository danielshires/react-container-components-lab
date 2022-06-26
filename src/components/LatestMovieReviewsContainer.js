import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {

    constructor() {
        super()
        this.state = {
            reviews: [],
        }
    }

    componentDidMount() {
        const NYT_API_KEY = 'iFOiLVzn1LoP46bEffg3qOG5BVE5bZwI';
        const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`
        fetch(URL)
            .then(response => response.json())
            .then(response => { this.setFetchData(response) })
    }

    setFetchData = (data) => {
        this.setState({
            reviews: data.results,
        })
    }

    listMovieReviews = () => {
        return this.state.reviews.map((entry, index) => {
            return <MovieReviews key={index} movieFetchResponse={entry} />
        })
    }

    render() {

        return (
            <div className="latest-movie-reviews">
                <ul className="review-list">
                    {this.listMovieReviews()}
                </ul>
            </div>
        );
    }
}

export default LatestMovieReviewsContainer;

// API RESPONSE

// {
//     "display_title": "Rise",
//     "mpaa_rating": "PG",
//     "critics_pick": 1,
//     "byline": "Calum Marsh",
//     "headline": "‘Rise’ Review: To Be Giannis",
//     "summary_short": "The story of the real-life N.B.A. superstar Giannis Antetokounmpo is told with heartfelt charm in this endearing Disney+ biopic.",
//     "publication_date": "2022-06-24",
//     "opening_date": "2022-06-24",
//     "date_updated": "2022-06-24 07:01:03",
//     "link": {
//         "type": "article",
//         "url": "https://www.nytimes.com/2022/06/24/movies/rise-review-to-be-giannis.html",
//         "suggested_link_text": "Read the New York Times Review of Rise"
//     },
//     "multimedia": {
//         "type": "mediumThreeByTwo210",
//         "src": "https://static01.nyt.com/images/2022/06/24/arts/rise1/rise1-mediumThreeByTwo440.jpg",
//         "height": 140,
//         "width": 210
//     }
// }