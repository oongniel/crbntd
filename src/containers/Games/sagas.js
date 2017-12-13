import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { gamesConstants } from './constants';
import { addGame } from './actions';

function* getGames() {
    try {
        yield put(addGame(['Hey!', 'HEy2!']))
        // yield put({
        //     type: gamesConstants.addGame,
        //     list: ['Hey!', 'HEy2!']
        // })
    } catch(e) {
        yield put(addGame(['Hey!', 'HEy2!']))
    }
}

/*
Alternatively you may use takeLatest.

Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
dispatched while a fetch is already pending, that pending fetch is cancelled
and only the latest one will be run.
*/
export default function* gameSaga() {
    yield takeLatest(gamesConstants.GET_GAMES, getGames)
}

// export default gameSaga;