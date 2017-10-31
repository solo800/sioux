export default function (state = [], action) {
    switch (action.type) {
        case 'CREATE_RECIPE':
            return [...state, Object.assign({}, action.recipe)];
            break;
        default:
            return state;
    }
}
