import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class InputField extends Component {
    render() {
        const { placeholder, type, label, errorMessage, disabled, multiLine } = this.props;
        return (
            <TextField
                hintText={placeholder}
                type={type ? type : 'text'}
                floatingLabelText={label}
                errorText={errorMessage}
                fullWidth={true}
                disabled={disabled}
                multiLine={multiLine}
            />
        );
    }
}

export default InputField;
