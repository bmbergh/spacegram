import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Photo from '../components/photo';
import * as feedActions from '../actions/FeedActions';
import Feed from '../components/feed';
import Search from '../components/search';
import * as searchActions from '../actions/SearchActions';

class FeedContainer extends React.Component{
  constructor(props) {
    super(props);

    this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
  
  }
  componentWillMount(){
    let {feedActions} = this.props;
    feedActions.fetchAllPhotos();
  }

  render(){
    let {photos, search} = this.props;
    console.log('search: ', search);

    let filterPhotos = search.query ?
      photos.filter((photo) => new RegExp(search.query, "ig").test(photo.title)) :
      photos;

    return(
      <div>
        <Search onChange={this.onSearchQueryChange} />
        <Feed photos={filterPhotos}/>
      </div>
    )
  }

  onSearchQueryChange(value){
    let {searchActions} = this.props;
    searchActions.queryChange(value);
  }
}



function mapStateToProps(state) {
  return {
    photos: state.feed.photos,
    search: state.search
  }
}

function mapDispatchToProps(dispatch) {
  return {
    feedActions: bindActionCreators(feedActions, dispatch),
    searchActions: bindActionCreators(searchActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer)