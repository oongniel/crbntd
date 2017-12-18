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

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignedIn: false,
            googleUser: null,
            auth2: null
        }
    }
    componentDidMount() {
        const component = this;
        // gapi.load('client', component.props.initServices);
        if (!window.gapi) {
          this.loadGapiScript();
        } else {
          // this.setState({ apiLoaded: true })
        }
    }
    initServices() {
        console.log('hey')
        this.props.initServices();
    }
    loadGapiScript() {
        // Load the google maps api script when the component is mounted.
        let component = this;
        loadScript('https://apis.google.com/js/client.js')
          .then((script) => {
            // component.initServices();
            gapi.load('client:auth2', component.props.initServices);
            // component.initServices();
            // Grab the script object in case it is ever needed.
            // this.mapScript = script;
            // this.setState({ apiLoaded: true });
          })
          .catch((err: Error) => {
            console.error(err.message);
          });
      }
    render() {
        const { isSignedIn } = this.state;

        return (
            <div>
                {!isSignedIn && <h1>Loading</h1>}
                {isSignedIn && <div>
                    <HeaderWrapper />
                    <AppContent />
                    <FooterWrapper />
                </div>}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { initServices },
    dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
