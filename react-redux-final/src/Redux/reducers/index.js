import * as Action from '../constants/ActionTypes';

// A reducer takes 2 parameters: the current state, and an action. The 'action' here is a misnomer. It is merely an object that contains already processed data and a signature indicating what type of action was done. That signature indicates to the reducer 

// This is our initial application state. Notice how the App component no longer has any state. In fact, that state has now been moved to the Redux store.
const initialState = {
    rawSearchResults: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case Action.ADD_SEARCH_RESULTS:
            // Processing of the payload should not be done here - it should have been completed in the action. The reducer's job is to merge the action's payload into the application state, without actually modifying the existing application state. Returning a new object as the new application state without modifying the previous state enables time travel debugging.
            return {...state, rawSearchResults: action.payload}; // Challenge: modify this reducer to actually ADD new search results rather than replace the current search results
        default:
            return state;
    }
};

export default rootReducer;
