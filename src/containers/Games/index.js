import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getGames } from './actions';

class Games extends Component {
    componentDidMount() {
        this.props.getGames();
    };
    render() {
        console.log(this.props.gameList)
        return (
            <div>
                Heyyy!
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gameList: state.gameReducer
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { getGames },
    dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
