import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import styled from 'styled-components';

const Toast = styled(Snackbar)`
`;

class SnackbarWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
        };
      }

      handleClick = () => {
        this.setState({
          open: true,
        });
      };

      handleRequestClose = () => {
        this.setState({
          open: false,
        });
      };

    render() {
        return (
             <div>
                <RaisedButton
                  onClick={this.handleClick}
                  label="Show toast message"
                  fullWidth={true}
                />
                <Toast
                  open={this.state.open}
                  message="Hello! This is a sample toast message."
                  autoHideDuration={4000}
                  onRequestClose={this.handleRequestClose}
                  action="Close"
                />
              </div>
        );
    }
}

export default SnackbarWrapper;
