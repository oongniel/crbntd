import React, { Component } from 'react';
import { colors } from '../../variables';
import AppModal from '../../components/Modal';
import InputField from '../../components/Input';

class AddGame extends Component {

  render() {
    const { handleSubmit, handleClose, open } = this.props;
    return (
        <AppModal
            title="Add New Game"
            handleSubmit={handleSubmit}
            handleClose={handleClose}
            open={open}
        >
            <div>
                <InputField placeholder="" label="Enter Game Name" />
            </div>
        </AppModal>
    );
  }
}

export default AddGame;
