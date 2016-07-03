import {combineReducers} from 'redux';
import feed from './FeedReducer';
import search from './SearchReducer';

const rootReducer = combineReducers({
  feed,
  search
})

export default rootReducer;