import React, {Component} from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';

const AppHeader = styled.div`
    position: fixed;
    width: 100%;
    z-index: 3;
`;
const UserAvatar = styled(Avatar)`
    position: absolute;
    right: 60px;
    top: 12px;
`;
const Logo = styled.img`
    height: calc(100% - 20px);
    padding: 10px 0;
`;
const Greeting = styled.div`
    position: absolute;
    top: 0;
    right: 120px;
    color: white;
    font-size: 14px;
    top: 24px;
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
        const { data } = this.props;
        const { given_name, email, picture } = data;
        console.log(data)
        return (
            <AppHeader>
                <AppBar
                    // title="Carbonated Games"
                    title={<div style={{ height: '100%' }}>{false && <Logo src="https://carbonated-games-dev2.appspot.com/img/carbonated.png" />} <span style={{ verticalAlign: 'top', color: 'white' }}>Carbonated Games</span> </div>}
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
                            <MenuItem primaryText={email} />
                            <MenuItem primaryText="Sign out" />
                        </IconMenu>
                    }
                >
                <Greeting>Hello, {given_name}</Greeting>
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
