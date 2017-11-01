import {createStore, applyMiddleware} from 'redux';
import recipeListReducer from '../reducers/recipeListReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function (initialState) {
    return createStore(
        recipeListReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    );
}
