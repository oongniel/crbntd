import React, { Component } from 'react';
import Games from '../Games';
// import CardWrapper from '../../components/Card';

class AppContent extends Component {
    render() {
        return (
            <div style={{ width: 'calc( 100% - 40px )', padding: '80px 20px', maxWidth: '700px', margin: 'auto' }} >
                <Games />
            </div>
        );
    }
}

export default AppContent;
