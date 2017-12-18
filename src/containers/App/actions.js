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
