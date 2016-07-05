import * as api from '../util/flickrApi';
import {
  FETCH_SEARCH_RESULTS_SUCCESS, 
  FETCH_SEARCH_RESULTS_ERROR 
} from './ActionTypes';

export function queryChange(query){ //passing in the search query from the container 
  return{ 
    type: FETCH_SEARCH_RESULTS_SUCCESS,
    payload: {query}
  }
}

export function queryChangeError(error){
  return{ 
    type: FETCH_SEARCH_RESULTS_ERROR,
    payload: {error}
  }
}
