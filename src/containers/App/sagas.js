/* global gapi */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { appConstants } from './constants';
import { config } from '../../config';
import { signIn, authUser, setUserDetails } from './actions';

let userInfo;

function* initServices() {
    try {
        // gapi.client.load('services', 'v1.0', yield put(signIn()), window.location.host + '/_ah/api');
        gapi.client.load('oauth2', 'v2', yield put(signIn()));
    } catch(e) {
        // yield put(addGame(['Hey!', 'HEy2!']))
    }
}

function* initSignIn() {
    try {
        gapi.auth.authorize({
            client_id: config.CLIENT_ID,
            scope: config.SCOPE,
            immediate: true
        },
            yield put(authUser())
        );
    } catch(e) {
    }
}

function* initUserAuth() {
    try {
        gapi.client.oauth2.userinfo.get().execute(function(resp) {
           if (!resp.code) {
                userInfo = resp;
            }
        });
        console.log(userInfo)
        yield put(setUserDetails(userInfo))
    } catch(e) {

    }
}


/*
Alternatively you may use takeLatest.

Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
dispatched while a fetch is already pending, that pending fetch is cancelled
and only the latest one will be run.
*/
export default function* appSaga() {
    yield takeLatest(appConstants.INIT_SERVICES, initServices),
    yield takeLatest(appConstants.SIGN_IN, initSignIn),
    yield takeLatest(appConstants.USER_AUTH, initUserAuth)
}
