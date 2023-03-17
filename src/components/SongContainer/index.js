import {AiFillDelete} from 'react-icons/ai'

import './index.css'

const SongContainer = props => {
  const {initialTracksList, onDelete} = props
  const {id, imageUrl, name, genre, duration} = initialTracksList
  const onClickButton = () => {
    onDelete(id)
  }
  return (
    <li className="song-container">
      <div className="songs-list">
        <div className="image-title">
          <img className="image" src={imageUrl} alt="track" />
          <div className="details">
            <p className="name">{name}</p>
            <p className="genre">{genre}</p>
          </div>
        </div>
        <div className="delete-container">
          <p className="duration">{duration}</p>
          <button
            onClick={onClickButton}
            data-testid="delete"
            className="button"
            type="button"
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </li>
  )
}

export default SongContainer
