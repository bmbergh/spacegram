import {combineReducers} from 'redux';
import feed from './FeedReducer';

const rootReducer = combineReducers({
  feed
})

export default rootReducer;