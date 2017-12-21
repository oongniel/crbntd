import React, { Component } from 'react';
import styled from 'styled-components';
import CircularProgress from 'material-ui/CircularProgress';
// import { colors } from '../../variables';

const LoadingContainer = styled.div`
    margin-top: 50%;
    transform: translateY(-40px);
    text-align: center;
`;

class AppLoadingIndicator extends Component {

  render() {
    return (
        <LoadingContainer>
            <CircularProgress size={60} thickness={5} />
        </LoadingContainer>
    );
  }
}

export default AppLoadingIndicator;
