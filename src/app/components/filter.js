import React, { Component, PropTypes } from 'react';

class Filter extends React.Component{
  render(){
   let { filter, onToggleLikeFilter } = this.props;
   
    return(
      <div>
         <button onClick={() => onToggleLikeFilter()}>likes</button>
      </div>
    )
  }
}

export default Filter;


