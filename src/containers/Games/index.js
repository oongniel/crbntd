import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addGame } from './actions';
import Games from './Games';

const mapStateToProps = (state) => {
    return {
        gameList: state.gameReducer
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { addGame },
    dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
