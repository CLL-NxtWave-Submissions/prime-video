import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const getActionMoviesList = inputMoviesList =>
    inputMoviesList.filter(
      inputMoviesListItem => inputMoviesListItem.categoryId === 'ACTION',
    )

  const getComedyMoviesList = inputMoviesList =>
    inputMoviesList.filter(
      inputMoviesListItem => inputMoviesListItem.categoryId === 'COMEDY',
    )

  const actionMoviesList = getActionMoviesList(moviesList)
  const comedyMoviesList = getComedyMoviesList(moviesList)

  return (
    <div className="prime-video-bg-container">
      <div className="prime-video-img-container">
        <img
          className="prime-video-img"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
      </div>
      <ul className="prime-video-content-container">
        <li className="prime-video-category-content-container">
          <h1 className="prime-video-category-name">Action Movies</h1>
          <MoviesSlider sliderMoviesList={actionMoviesList} />
        </li>
        <li className="prime-video-category-content-container">
          <h1 className="prime-video-category-name">Comedy Movies</h1>
          <MoviesSlider sliderMoviesList={comedyMoviesList} />
        </li>
      </ul>
    </div>
  )
}

export default PrimeVideo
