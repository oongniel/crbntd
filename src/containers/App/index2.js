/* global gapi */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Games from '../Games';
import HeaderWrapper from '../../components/Header';
import FooterWrapper from '../../components/Footer';
import AppContent from '../Content';
import { initServices } from './actions';
import { config } from '../../config';
import { loadScript } from '../../util';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignedIn: false,
            googleUser: null,
            auth2: null
        }
    }
    componentDidUpdate() {

    }
    componentDidMount() {
        const component = this;
        // gapi.load('client', component.props.initServices);
        if (!window.gapi) {
          // this.loadGapiScript();
        } else {
          // this.setState({ apiLoaded: true })
        }
    }
    init() {
        console.log('hey')
        gapi.load('client:auth2', this.props.initServices);
    }
    loadGapiScript() {
        // Load the google maps api script when the component is mounted.
        let component = this;
        loadScript('https://apis.google.com/js/client.js')
          .then((script) => {
            gapi.load('client:auth2', component.props.initServices);
          })
          .catch((err: Error) => {
            console.error(err.message);
          });
  }
    render() {
        const { isSignedIn } = this.state;
        const { initServices } = this.props;
        const { userDetails } = this.props.appReducer;
        console.log(this.props.appReducer)
        const style = {
          margin: 12,
        };
        return (
            <div>
                {!userDetails.userDetails && <RaisedButton onClick={this.init.bind(this)} label="Sign In" primary={true} style={style} />}
                {userDetails.userDetails && <div>
                    <HeaderWrapper />
                    <AppContent />
                    <FooterWrapper />
                </div>}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        appReducer: state.appReducer
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { initServices },
    dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
