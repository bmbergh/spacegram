import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Photo from '../components/photo';
import * as actions from '../actions/FeedActions';
import Feed from '../components/feed';
// import FeedActions from '../actions/FeedActions';

class FeedContainer extends React.Component{

  componentWillMount(){
    let{actions} = this.props;
    actions.fetchAllPhotos();
  }

  render(){
    let {photos} = this.props;
    console.log('Photos: ', this.props.photos);
    return(
      <div>
        <Feed photos={this.props.photos}/>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    photos: state.feed.photos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer)