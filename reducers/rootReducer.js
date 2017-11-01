import {combineReducers} from 'redux';
import recipes from './recipeListReducer';

const rootReducer = combineReducers({
    recipes
});

export default rootReducer;
