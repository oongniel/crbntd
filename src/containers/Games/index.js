import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addGame, setGameName } from './actions';
import Games from './Games';

const mapStateToProps = (state) => {
    const { gameList, gameName } = state.gameReducer;
    return {
        gameList,
        gameName
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { 
            addGame,
            setGameName
        },
    dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
