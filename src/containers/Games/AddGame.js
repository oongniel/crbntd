import React, { Component } from 'react';
import { colors } from '../../variables';
import AppModal from '../../components/Modal';
import InputField from '../../components/Input';

class AddGame extends Component {
    
    _onChange = (e) => {
        this.props.setGameName(e.target.value);
    }
    
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
                    <InputField placeholder="" label="Enter Game Name" onChange={this._onChange}/>
                </div>
            </AppModal>
        );
    }
}

export default AddGame;
