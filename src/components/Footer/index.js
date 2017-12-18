import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import styled from 'styled-components';
// import MyIconName from 'material-ui/svg-icons/<category>/<name>';
import HomeIcon from 'material-ui/svg-icons/action/home';
import CurrencyIcon from 'material-ui/svg-icons/editor/monetization-on'
import EventIcon from 'material-ui/svg-icons/action/event';
import BuildIcon from 'material-ui/svg-icons/action/build';
import ProductIcon from 'material-ui/svg-icons/action/shop';
import EntitlementIcon from 'material-ui/svg-icons/action/assignment';

const TabWrapper = styled(Tabs)`
    position: fixed;
    bottom: 0;
    width: 100%;
`;

const TabItem = {
    textTransform: 'capitalize',
    fontSize: '1.2em'
}


class Footer extends Component {
    onChange(e) {
        // console.log( e)
    }
    onTabActive(e) {
        console.log(e.props.label)
    }
    render() {
        return (
            <TabWrapper onChange={this.onChange.bind(this)}>
                <Tab
                    onActive={this.onTabActive.bind(this)}
                    icon={<HomeIcon />}
                    label="Home"
                    style={TabItem}
                />
                <Tab
                    onActive={this.onTabActive.bind(this)}
                    icon={<CurrencyIcon />}
                    label="Currencies"
                    style={TabItem}
                />
                <Tab
                    onActive={this.onTabActive.bind(this)}
                    icon={<ProductIcon />}
                    label="Products"
                    style={TabItem}
                />
                <Tab
                    onActive={this.onTabActive.bind(this)}
                    icon={<EventIcon />}
                    label="Events"
                    style={TabItem}
                />
                <Tab
                    onActive={this.onTabActive.bind(this)}
                    icon={<BuildIcon />}
                    label="Builds"
                    style={TabItem}
                />
                <Tab
                    onActive={this.onTabActive.bind(this)}
                    icon={<EntitlementIcon />}
                    label="Entitlement"
                    style={TabItem}
                />
            </TabWrapper>
        );
    }
};

export default Footer;