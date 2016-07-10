import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Photo from '../components/photo';
import * as feedActions from '../actions/FeedActions';
import * as likeActions from '../actions/LikeActions';
import * as searchActions from '../actions/SearchActions';
import * as filterActions from '../actions/FilterActions';
import Feed from '../components/feed';
import Nav from './NavContainer';


class FeedContainer extends React.Component{
  constructor(props) {
    super(props);

    this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
    this.onLike = this.onLike.bind(this);
    this.onToggleLikeFilter = this.onToggleLikeFilter.bind(this);
  
  }
  componentWillMount(){
    let {feedActions} = this.props;
    feedActions.fetchAllPhotos();
  }

  render(){
    let {photos, search, likes, filter} = this.props;
    console.log('=========================================');
    console.log('filter likes inside RENDER', filter.likes);
    console.log('=========================================');
    console.log('LIKES: ', likes);
    // filter the photos based on queries in the title associated with each photo
    // This is all done inside of the filter arrow function below:
    // let filterPhotos = [];
    // 1. Does the photo match the search query && no like filter is set return true
    // 2. Does the photo match the like filter && no search query return true
    // 3. Does the phote match the search query && like filter when both are enabled return true
    // 4. Doesn't match anything return false
    // 5. if like filter is true and photo.id exists in liked photos.
    let filterPhotos = search.query || filter.likes ?
      photos.filter((photo) => {
        if (new RegExp(search.query, "ig").test(photo.title) && !filter.likes){
          return true;
        }else if(filter.likes && likes[photo.id] && !search.query){
          console.log('1st else if: ', filter.likes, likes[photo.id]);
          return true;
        }else if(new RegExp(search.query, "ig").test(photo.title) && filter.likes && likes[photo.id]){
          console.log('2nd else if: ', filter.likes, likes[photo.id]);
          return true;
        }else{
          return false;
        }
      })
      : photos;

    return(
      <div className="container">
      <Nav />
        <Feed photos={filterPhotos} onLike={this.onLike} likes={likes} />
      </div>
    )
  }
// let likedPhotos = [];
//     photos.map((photo) => {
//       if (likes[photo.id]) {
//         likedPhotos.push(likes[photo.id]);
//         console.log('photo liked');
//       } else{
//         console.log('no photos liked');
//       };  
//     }); 

  onToggleLikeFilter(){
    let {filterActions} = this.props;
    filterActions.toggleLikeFilter();    
  }

  onSearchQueryChange(value){
    let {searchActions} = this.props;
    searchActions.queryChange(value);
  }

  onLike(id){
    let {likeActions} = this.props;
    likeActions.toggleLike(id);
  }
}



function mapStateToProps(state) {
  return {
    photos: state.feed.photos,
    search: state.search,
    likes: state.likes,
    filter: state.filter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    feedActions: bindActionCreators(feedActions, dispatch),
    searchActions: bindActionCreators(searchActions, dispatch),
    likeActions: bindActionCreators(likeActions, dispatch),
    filterActions: bindActionCreators(filterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer)