import { combineReducers } from 'redux';
import appReducer from '../containers/App/reducer';
import gameReducer from '../containers/Games/reducer';

export default combineReducers({
    appReducer,
    gameReducer,
});