import {combineReducers} from 'redux';
import feed from './FeedReducer';
import search from './SearchReducer';
import likes from './LikesReducer';
import filter from './FilterReducer';

const rootReducer = combineReducers({
  feed,
  search,
  likes,
  filter
})

export default rootReducer;