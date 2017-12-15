import React, { Component } from 'react';
import InputField from '../../components/Input';
import CardWrapper from '../../components/Card';

class AppContent extends Component {
    render() {
        return (
            <div style={{ width: 'calc( 100% - 40px )', padding: '80px 20px', maxWidth: '700px', margin: 'auto', background: '#f2f7fb' }} >
                <CardWrapper />
            </div>
        );
    }
}

export default AppContent;
