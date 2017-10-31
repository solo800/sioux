import {createStore, applyMiddleware} from 'redux';
import recipeReducer from '../reducers/recipeReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function (initialState) {
    return createStore(
        recipeReducer,
        initialState,
        applyMiddleware(reduxImmutableStateInvariant())
    );
}
