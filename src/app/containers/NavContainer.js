import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from '../components/search';
import Filter from '../components/filter';
import * as searchActions from '../actions/SearchActions';
import * as filterActions from '../actions/FilterActions';
import logo from 'img/logo_name_spacegram.png';

class NavContainer extends React.Component{
  constructor(props) {
    super(props);
    this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
    this.onToggleLikeFilter = this.onToggleLikeFilter.bind(this);
  }

  render(){
    let {photos, search, likes, filter} = this.props;

    return(
      <div className="container-nav">
        <div className="image-wrapper"><img src={logo} /></div>
        <Search onChange={this.onSearchQueryChange} />
        <Filter onToggleLikeFilter={this.onToggleLikeFilter} /> 
      </div>
    )
  }

  onSearchQueryChange(value){
    let {searchActions} = this.props;
    searchActions.queryChange(value);
  }


  onToggleLikeFilter(likes){
    let {filterActions} = this.props;
    filterActions.toggleLikeFilter(likes);    
  }
}
function mapStateToProps(state) {
  return {
    photos: state.feed.photos,
    search: state.search,
    filter: state.filter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchActions: bindActionCreators(searchActions, dispatch),
    filterActions: bindActionCreators(filterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer)