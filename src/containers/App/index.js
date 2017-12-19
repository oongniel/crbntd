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
        this.state = {
            gapiLoaded: false
        }
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
                gapi.load('client:auth2', component.initSigninV2);
                component.setState({ gapiLoaded: true })
            })
            .catch((err: Error) => {
                console.error(err.message);
            });
    };

    initSigninV2() {
        const { setUserDetails, setUserSignInStatus, appReducer, initServices } = window.app.props;
        const { signedIn } = appReducer;

        gapi.client.init({
            // apiKey: config.API_KEY_DEV,
            clientId: config.CLIENT_ID,
            scope: config.SCOPE
        }).then(function () {
          // Listen for sign-in state changes.
            gapi.auth2.getAuthInstance().isSignedIn.listen((val) => {
                setUserSignInStatus(val);
            });

            gapi.client.load('services', 'v1.0', function() {
                gapi.auth.authorize({
                    client_id: config.CLIENT_ID,
                    scope: config.SCOPE,
                    immediate: true
                }, function() {
                    gapi.client.oauth2.userinfo.get().execute(function(resp) {
                       if (!resp.code) {
                            setUserDetails(resp);
                        }
                    });
                })
            }, '//' + 'carbonated-games-dev2.appspot.com' + '/_ah/api');

            gapi.client.load('oauth2', 'v2', function() {
                gapi.auth.authorize({
                    client_id: config.CLIENT_ID,
                    scope: config.SCOPE,
                    immediate: true
                }, function() {
                    gapi.client.oauth2.userinfo.get().execute(function(resp) {
                       if (!resp.code) {
                            setUserDetails(resp);
                        }
                    });
                })
            });

            if(!gapi.auth2.getAuthInstance().isSignedIn.get()) {
                gapi.auth2.getAuthInstance().signIn();
            } else {
                setUserSignInStatus(true);
            }
        });
    };

    render() {
        const { userDetails, signedIn } = this.props.appReducer;
        const { gapiLoaded } = this.state;
        const hasUser = Object.keys(userDetails);
        console.log(hasUser)
        return (
            <div>
                {(!hasUser) && <div>Please sign in</div>}
                {(signedIn && hasUser.length && gapiLoaded) && <div>
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
