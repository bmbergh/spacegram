import {combineReducers} from 'redux';
import feed from './FeedReducer';
import search from './SearchReducer';
import likes from './LikesReducer';

const rootReducer = combineReducers({
  feed,
  search,
  likes
})

export default rootReducer;