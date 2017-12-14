import React, { Component } from 'react';
import Games from '../Games';
import HeaderWrapper from '../../components/Header';
import FooterWrapper from '../../components/Footer';
// import MyIconName from 'material-ui/svg-icons/<category>/<name>';

class App extends Component {
    render() {
        return (
            <div>
                <HeaderWrapper/>
                <FooterWrapper/>
            </div>
        );
    }
}

export default App;
