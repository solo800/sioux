import * as types from './actionTypes';

export function createRecipe (recipeList) {
    return {type: types.CREATE_RECIPE, recipeList};
}
