/* global gapi */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { appConstants } from './constants';
import { config } from '../../config';
import { signIn, authUser } from './actions';

function* initServices() {
    try {
        var apisToLoad;
        var putSignIn = yield put(signIn());
        var callback = function() {
            if (--apisToLoad == 0) {
                putSignIn;
            }
        }
        apisToLoad = 2;
        gapi.client.load('services', 'v1.0', callback, '//' + window.location.host + '/_ah/api');
        gapi.client.load('oauth2', 'v2', callback);
    } catch(e) {
        // yield put(addGame(['Hey!', 'HEy2!']))
    }
}

function* initSignIn() {
    try {
        gapi.auth.authorize({
            client_id: config.CLIENT_ID,
            scope: config.SCOPE,
            // immediate: true
        },
            yield put(authUser())
        );
    } catch(e) {
    }
}

function* initUserAuth() {
    try {
        console.log(gapi.client.oauth2.userinfo.get());
        gapi.client.oauth2.userinfo.get().execute(function(resp) {
            alert();
           if (!resp.code) {
                // carbonated.services.signedIn = true;
                console.log('auth', resp)
            }
        });
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
