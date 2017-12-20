import { gamesConstants } from './constants';

export const getGames = () => ({
    type: gamesConstants.GET_GAMES
})

export const addGame = (list) => ({
    type: gamesConstants.ADD_GAME,
    list
})

export const setGameName = (name) => ({
    type: gamesConstants.SET_NEW_GAME_NAME,
    name
})