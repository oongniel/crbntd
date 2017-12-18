import { appConstants } from './constants';

const initialState = {
    userDetails: {}
};

export default function appReducer(state = initialState, action) {
    switch(action.type) {
        case appConstants.USER_SET_DETAILS:
            return {
                ...state,
                userDetails: action.details
            }
        default:
            return state;
    }
};