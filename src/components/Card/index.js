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
                    title="Niel Game"
                    subtitle="Game description"
                    // actAsExpander={true}
                    // showExpandableButton={true}
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
                    <h3>Form Items</h3>
                    <InputField placeholder="Enter username" label="Username" />
                    <InputField placeholder="Enter Password" label="Password" type="password" />
                    <InputField placeholder="Enter Password" label="Password" type="password" multiLine={true} />
                    <SelectField
                      floatingLabelText="Select Gender"
                      fullWidth={true}
                    >
                      <MenuItem value={1} primaryText="Never" />
                      <MenuItem value={2} primaryText="Every Night" />
                      <MenuItem value={3} primaryText="Weeknights" />
                      <MenuItem value={4} primaryText="Weekends" />
                      <MenuItem value={5} primaryText="Weekly" />
                    </SelectField>
                    <h3>Table/List</h3>
                    <Table />
                    <h3>Buttons</h3>
                    <RaisedButton
                        style={{margin: '12px'}}
                        label="Add Primary"
                        primary={true}
                        icon={<AddButton />}
                    />
                    <RaisedButton
                        style={{margin: '12px'}}
                        label="Add Secondary"
                        secondary={true}
                        icon={<AddButton />}
                    />
                    <h3>Modals</h3>
                    <AppModal />
                    <h3>Toast Message</h3>
                    <SnackbarWrapper />
                </CardText>
                {/**<CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                </CardActions>**/}
              </Card>
        );
    }
}

export default CardWrapper;
