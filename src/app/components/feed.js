import React from 'react';
import ReactDOM from 'react-dom';

export default class Feed extends React.Component {
  render() {
    return 
    <div className="image">
      <img src={this.props.image} id={this.props.id} alt={this.props.searchTerm} />
    </div>
    }
}


