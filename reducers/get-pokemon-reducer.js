import * as actionTypes from './../constants/action-types';

const initialState = {
    isLoading: false
}

export default (state = initialState, action) => {
    if (action.type === actionTypes.GET_POKEMON_REQUEST) {
        return { ...state, isLoading: true };
    }
}