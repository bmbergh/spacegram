import { 
  FETCH_SEARCH_RESULTS_SUCCESS,
  FETCH_SEARCH_RESULTS_ERROR, 
} from '../actions/ActionTypes';

export default function search(state={query:null}, action){
  switch(action.type){
    case FETCH_SEARCH_RESULTS_SUCCESS:
      return Object.assign({}, state, {query: action.payload.query});

    case FETCH_SEARCH_RESULTS_ERROR:
      return Object.assign({}, state, {
        error: aciton.payload.error
      });
    default:
      return state;
  };
};