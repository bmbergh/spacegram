import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './photo';

export default class Feed extends React.Component {

  render() {

    let {photos, onLike, likes} = this.props;
    if(!photos) return null;

    let photoNodes = photos.map((photo, i) => {
      return <Photo liked={likes[photo.id]} onLike={onLike} photo={photo} key={i} />
    });

    return ( 
      <div className="feed-class">
        {photoNodes}
      </div>
    )
  }

}


