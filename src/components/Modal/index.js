import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import InputField from '../Input';
import styled from 'styled-components';

const DialogWrapper = styled(Dialog)`
    h3 {
        background: #2a6667;
        color: white!important;
        padding: 16px!important;
    }
`;

class AppModal extends Component {
 state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Show Modal" onClick={this.handleOpen} fullWidth={true}/>
        <DialogWrapper
          title="Add New"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <InputField placeholder="" label="Enter New Name" />
        </DialogWrapper>
      </div>
    );
  }
}

export default AppModal;
