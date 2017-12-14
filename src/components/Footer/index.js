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
    render() {
        return (
            <TabWrapper>
                <Tab
                  icon={<HomeIcon />}
                  label="Home"
                  style={TabItem}
                />
                <Tab
                  icon={<CurrencyIcon />}
                  label="Currencies"
                  style={TabItem}
                />
                <Tab
                  icon={<ProductIcon />}
                  label="Products"
                  style={TabItem}
                />
                <Tab
                  icon={<EventIcon />}
                  label="Events"
                  style={TabItem}
                />
                <Tab
                  icon={<BuildIcon />}
                  label="Builds"
                  style={TabItem}
                />
                <Tab
                  icon={<EntitlementIcon />}
                  label="Entitlement"
                  style={TabItem}
                />
            </TabWrapper>
        );
    }
};

export default Footer;