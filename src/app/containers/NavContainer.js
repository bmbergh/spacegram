import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from '../components/search';
import * as searchActions from '../actions/SearchActions';

import logo from 'img/logo_name_spacegram.png';

class NavContainer extends React.Component{
  constructor(props) {
    super(props);
    this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
  }

  render(){
    let {photos, search} = this.props;

    let filterPhotos = search.query ?
      photos.filter((photo) => new RegExp(search.query, "ig").test(photo.title)) :
      photos;

    return(
      <div className="container-nav">
        <div className="image-wrapper"><img src={logo} /></div>
        <Search onChange={this.onSearchQueryChange} />
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
    searchActions: bindActionCreators(searchActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer)