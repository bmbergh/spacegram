import React, { Component, PropTypes } from 'react';


class Search extends React.Component{
  render(){
    return(
      <div className="input-container">
        <input 
        className="input"
        placeholder="search"
        type='text' 
        onChange={ (e) => this.props.onChange(e.target.value)} />
      </div>
    )
  }
}

Search.propTypes ={
  onChange: PropTypes.func.isRequired
}

export default Search;
