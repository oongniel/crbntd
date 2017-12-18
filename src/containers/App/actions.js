import { appConstants } from './constants';

export const initServices = () => ({
    type: appConstants.INIT_SERVICES
})

export const signIn = () => ({
    type: appConstants.SIGN_IN
})

export const authUser = () => ({
    type: appConstants.USER_AUTH
})

export const setUserDetails = (details) => ({
    type: appConstants.USER_SET_DETAILS,
    details
})

export const setUserSignInStatus = (bool) => ({
    type: appConstants.USER_SET_SIGN_IN_STATUS,
    bool
})


