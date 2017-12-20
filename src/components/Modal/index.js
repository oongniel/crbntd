import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';
import { colors } from '../../variables';

const DialogWrapper = styled(Dialog)`
    h3 {
        background: ${colors.primary[0]};
        color: white!important;
        padding: 16px!important;
    }
`;

class AppModal extends Component {

  render() {
    const { handleSubmit, children, title, handleClose, open,  } = this.props;
    const actions = [
      <FlatButton
        label="Cancel"
        onClick={handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={handleSubmit}
      />,
    ];

    return (
        <DialogWrapper
          title={title}
          actions={actions}
          modal={false}
          open={open}
          onRequestClose={handleClose}
        >
            {children}
        </DialogWrapper>
    );
  }
}

export default AppModal;
