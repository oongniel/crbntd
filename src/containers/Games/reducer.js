import { gamesConstants } from './constants';

const initialState = {
    gameList: []
};

export default function gameReducer(state = initialState, action) {
    switch(action.type) {
        case gamesConstants.ADD_GAME:
            return {
                ...state,
                gameList: action.list
            }
        default:
            return state;
    }
};