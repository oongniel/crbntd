import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import InputField from '../Input';
import Table from '../Table';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import AddButton from 'material-ui/svg-icons/content/add';
import AppModal from '../Modal';
import SnackbarWrapper from '../Snackbar';

class CardWrapper extends Component {
    render() {
        return (
            <Card>
                <CardHeader
                    title="Games"
                    subtitle="List of Available Games"
                    titleStyle={{ fontSize: '2em'}}
                >
                    <IconMenu
                        style={{ position: 'absolute', right: '0', top: '0' }}
                        iconButtonElement={
                          <IconButton><MoreVertIcon /></IconButton>
                        }
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                        >
                        <MenuItem primaryText="Settings" />
                        <MenuItem primaryText="Delete Game" />
                    </IconMenu>
                </CardHeader>
                <CardText >
                    <RaisedButton
                        style={{margin: '12px'}}
                        label="Add Game"
                        secondary={true}
                        icon={<AddButton />}
                    />
                </CardText>
              </Card>
        );
    }
}

export default CardWrapper;
