// Code MovieReviews Here
import React from "react"

function renderMovieReviews(props) {
    console.log(props.movieFetchResponse)
    return (
    
        <li className="review-list">
            <div>{props.movieFetchResponse.display_title}</div>
            <div>{props.movieFetchResponse.summary_short}</div>
            <img src={props.movieFetchResponse.multimedia.src} alt={props.movieFetchResponse.display_title}></img>
        </li>
    )

}

export default renderMovieReviews