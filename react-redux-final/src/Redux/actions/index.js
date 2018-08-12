// Actions are functions that take some data as input, processes that data if necessary, then returns an object containing the processed data as the payload and a signature indicating the type of action to be dispatched.
import { ADD_SEARCH_RESULTS } from '../constants/ActionTypes';

export function addSearchResults(searchResults) {
    // You can modify the search results here before returning the data to the reducer
    return {
        type: ADD_SEARCH_RESULTS,
        payload: searchResults
    }
};

