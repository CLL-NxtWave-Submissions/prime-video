import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {itemData} = props
  const {thumbnailUrl, videoUrl} = itemData

  const popUpTriggerJSX = (
    <button type="button" className="movie-item-button">
      <img
        className="movie-item-thumbnail-img"
        src={thumbnailUrl}
        alt="thumbnail"
      />
    </button>
  )

  return (
    <li className="movie-item-container">
      <Popup modal trigger={popUpTriggerJSX} className="popup-content">
        {close => (
          <div className="popup-container">
            <div className="popup-header-container">
              <button
                testid="closeButton"
                className="popup-close-btn"
                type="button"
                onClick={() => close()}
              >
                <IoMdClose className="close-btn-icon" />
              </button>
            </div>
            <div className="popup-content-container">
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        )}
      </Popup>
    </li>
  )
}

export default MovieItem
