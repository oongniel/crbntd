import React, {Component} from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import { colors } from '../../variables';

const AppHeader = styled.div`
    position: fixed;
    width: 100%;
    z-index: 3;
    > div { 
        background: linear-gradient(to bottom right, ${colors.primary[0]}, ${colors.primary[2]});
    }
`;
const UserAvatar = styled(Avatar)`
    position: absolute;
    right: 60px;
    top: 12px;
`;

class HeaderWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this._handleDrawerTrigger = this._handleDrawerTrigger.bind(this);
    }

    _handleDrawerTrigger(e) {
        this.setState({open: !this.state.open})
    }

    render() {
        return (
            <AppHeader>
                <AppBar
                    title="Niel Ong"
                    showMenuIconButton={false}
                    onLeftIconButtonClick={this._handleDrawerTrigger}
                    iconElementRight={
                        <IconMenu
                            iconButtonElement={
                              <IconButton><MoreVertIcon /></IconButton>
                            }
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                        >
                            <MenuItem primaryText="oongniel@gmail.com" />
                            <MenuItem primaryText="Sign out" />
                        </IconMenu>
                    }
                >
                <UserAvatar>N</UserAvatar>
                </AppBar>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </AppHeader>
        );
    }
}

export default HeaderWrapper;
