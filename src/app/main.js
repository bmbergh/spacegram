import React from 'react';
import { ReactDOM, render } from 'react-dom';
import configureStore from './store/index';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import Feed from './containers/FeedContainer';
import {fetchAllPhotos} from './actions/FeedActions';


const store = configureStore();
// store.dispatch(fetchAllPhotos());

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello</h1>
        {this.props.children}
      </div>
    )
  }
}

render(
  <Provider store={store}>
    <Router history={ hashHistory }>
      <Route path="/" component={App}>
        <Router path = "/feed" component={Feed} />
      </Route>
    </Router>
  </Provider>,
document.getElementById('app')
);