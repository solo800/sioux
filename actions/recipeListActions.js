import * as types from './actionTypes';
import axios from 'axios';

export function createRecipe (recipeList) {
    return {type: types.CREATE_RECIPE, recipeList};
}

export function loadRecipesSuccess (recipeList) {
    return {type: types.LOAD_RECIPES_SUCCESS, recipeList};
}

export function loadRecipes () {
    return function (dispatch) {
        return axios.get('/api/recipes')
            .then(response => {
                console.log('got recipes', response.data);
                dispatch(loadRecipesSuccess(response.data));
            })
            .catch(err => {
                throw(err);
            });
    };
}
