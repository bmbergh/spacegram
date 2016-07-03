import React, { Component, PropTypes } from 'react';


class Search extends React.Component{
  render(){
    return(
      <input 
      type='text' 
      onChange={ (e) => this.props.onChange(e.target.value)} />
    )
  }
}

Search.propTypes ={
  onChange: PropTypes.func.isRequired
}

export default Search;
