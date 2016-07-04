import React, { Component, PropTypes } from 'react'

class Photo extends React.Component {

  render() {
    let { photo, onLike, liked } = this.props;
    let buttonValue = liked ? 'dislike' : 'like';

    return (
      <div className="image-container">
        <h2>{photo.title}</h2>
            <button className={buttonValue} onClick={() => onLike(photo.id)}></button>
          <img className="image" src={this.photoUrl(photo)} />
      </div>
    )
  }

  photoUrl(photo) {
    return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`
  }

}

Photo.propTypes = {
  photo: PropTypes.object.isRequired
}

export default Photo;