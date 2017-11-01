import * as types from '../actions/actionTypes';

export default function (state = {newRecipe: {title: ''}, recipes: []}, action) {
    switch (action.type) {
        case types.CREATE_RECIPE:
            // console.log('calling reducer');
            const newState = Object.assign({}, state);
            newState.newRecipe.title = '';
            // newState.recipes = [...state.recipes, Object.assign({}, action.recipeList.newRecipe)];
            newState.recipes = [...state.recipes, action.recipeList.newRecipe];
            // const s = {
            //     newRecipe: {title: ''},
            //     recipes: [Object.assign({}, action.recipeList.newRecipe)],
            // };
            // console.log('returning', newState, 'from', action);
            return newState;
            break;
        default:
            return state;
    }
}
