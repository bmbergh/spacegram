import React, { Component, PropTypes } from 'react'
// import '../../styles/main.scss';

class Photo extends React.Component {

  render() {
    let { photo } = this.props

    return (
      <div className="image-container">
          <img src={this.photoUrl(photo)} />
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