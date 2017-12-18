import { appConstants } from './constants';

const initialState = {
    userDetails: {},
    signedIn: false
};

export default function appReducer(state = initialState, action) {
    switch(action.type) {
        case appConstants.USER_SET_DETAILS:
            return {
                ...state,
                userDetails: action.details
            }
        case appConstants.USER_SET_SIGN_IN_STATUS:
            return {
                ...state,
                signedIn: action.bool
            }
        default:
            return state;
    }
};