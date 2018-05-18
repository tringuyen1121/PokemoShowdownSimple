import * as actionTypes from './../constants/action-types';

export const getMovesAction = (dispatch) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.GET_POKEMON_REQUEST
        });
    }
}