import { gamesConstants } from './constants';

const initialState = {
    gameList: [],
    gameName: ''
};

export default function gameReducer(state = initialState, action) {
    switch(action.type) {
        case gamesConstants.ADD_GAME:
            return {
                ...state,
                gameList: [...action.list]
            }
        case gamesConstants.SET_NEW_GAME_NAME:
            return {
                ...state,
                gameName: action.name
            }
        default:
            return state;
    }
};