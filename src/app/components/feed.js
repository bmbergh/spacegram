import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './photo';

export default class Feed extends React.Component {

  render() {

    let {photos} = this.props;
    if(!photos) return null;
    console.log('photos: ', photos);

    let photoNodes = photos.map((photo, i) => {
      return <Photo photo={photo} key={i} />
    });

    return ( 
      <div className="feed-class">
        {photoNodes}
      </div>
    )
  }

}


