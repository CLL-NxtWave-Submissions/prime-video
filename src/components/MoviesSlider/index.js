import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {sliderMoviesList} = props
  const sliderProps = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <Slider {...sliderProps}>
      {sliderMoviesList.map(sliderMoviesListItem => (
        <div>
          <MovieItem
            key={sliderMoviesListItem.id}
            itemData={sliderMoviesListItem}
          />
        </div>
      ))}
    </Slider>
  )
}

export default MoviesSlider
