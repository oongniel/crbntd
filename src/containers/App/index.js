/* global gapi */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Games from '../Games';
import HeaderWrapper from '../../components/Header';
import FooterWrapper from '../../components/Footer';
import AppContent from '../Content';
import { initServices, setUserDetails, setUserSignInStatus } from './actions';
import { config } from '../../config';
import { loadScript } from '../../util';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.loadGapiScript();
    };

    loadGapiScript() {
        // Load the google maps api script when the component is mounted.
        let component = this;
        window.app = this;
        loadScript('https://apis.google.com/js/client.js')
            .then((script) => {
                gapi.load('auth2', component.initSigninV2);
            })
            .catch((err: Error) => {
                console.error(err.message);
            });
    };

    initSigninV2() {
        console.log(this)
        const { setUserDetails, setUserSignInStatus, appReducer } = window.app.props;
        const { signedIn } = appReducer;
        const auth2 = gapi.auth2.init({
            client_id: config.CLIENT_ID,
            scope: config.SCOPE
        });

        auth2.currentUser.listen((user) => {
            // console.log('User now: ', user, typeof user);
            setUserDetails(user);
        });

        auth2.isSignedIn.listen((val) => {
            // console.log('Signin state changed to ', val);
            setUserSignInStatus(val);
        });

        auth2.then(function () {
          if (!auth2.isSignedIn.get()) {
            auth2.signIn();
          }
        });
    };

    render() {
        const { userDetails, signedIn } = this.props.appReducer;
        return (
            <div>
                {!signedIn && <div>Please sign in</div>}
                {signedIn && <div>
                    <HeaderWrapper data={userDetails}/>
                    <AppContent />
                    <FooterWrapper />
                </div>}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        appReducer: state.appReducer
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {   initServices,
            setUserSignInStatus,
            setUserDetails
        },
    dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
