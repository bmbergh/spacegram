import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Photo from '../components/photo';
import * as feedActions from '../actions/FeedActions';
import * as likeActions from '../actions/LikeActions';
import * as searchActions from '../actions/SearchActions';
import Feed from '../components/feed';
import Nav from './NavContainer';


class FeedContainer extends React.Component{
  constructor(props) {
    super(props);

    this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
    this.onLike = this.onLike.bind(this);
  
  }
  componentWillMount(){
    let {feedActions} = this.props;
    feedActions.fetchAllPhotos();
  }

  render(){
    let {photos, search, likes} = this.props;

    let filterPhotos = search.query ?
      photos.filter((photo) => new RegExp(search.query, "ig").test(photo.title)) :
      photos;

    return(
      <div className="container">
      <Nav />
        <Feed photos={filterPhotos} onLike={this.onLike} likes={likes}/>
      </div>
    )
  }

  onSearchQueryChange(value){
    let {searchActions} = this.props;
    searchActions.queryChange(value);
  }

  onLike(id){
    console.log('id: ', id);
    let {likeActions} = this.props;
    likeActions.toggleLike(id);
  }
}



function mapStateToProps(state) {
  return {
    photos: state.feed.photos,
    search: state.search,
    likes: state.likes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    feedActions: bindActionCreators(feedActions, dispatch),
    searchActions: bindActionCreators(searchActions, dispatch),
    likeActions: bindActionCreators(likeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer)