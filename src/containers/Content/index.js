import React, { Component } from 'react';
import Games from '../Games';
import styled from 'styled-components';

const Container = styled.div`
    height: calc(100vh - 160px);
    width: calc( 100% - 40px );
    padding: 80px 20px;
    max-width: 700px;
    margin: auto;
`;
class AppContent extends Component {
    render() {
        return (
            <Container>
                <Games />
            </Container>
        );
    }
}

export default AppContent;
