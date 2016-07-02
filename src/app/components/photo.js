import React, { Component, PropTypes } from 'react'

class Photo extends React.Component {

  render() {
    let style = {
      border: '1px solid #efefef'
    }

    let { photo } = this.props

    return (
      <div style={style}>
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