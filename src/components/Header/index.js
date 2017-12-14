import React, { Component } from 'react';
import { Layout, Avatar, Row, Col } from 'antd';
import styled from 'styled-components';
const { Header } = Layout;

const AppHeader = styled(Header)`
    height: 55px;
`;

const UserAvatar = styled(Avatar)`
    margin: 12px;
`;

class HeaderWrapper extends Component {
    render() {
        return (
            <AppHeader>
                <Row >
                    <Col span={4}>
                        Test
                    </Col>
                    <Col span={16}>
                        Carbonated
                    </Col>
                    <Col span={2}>
                        <UserAvatar>USER</UserAvatar>
                    </Col>
                </Row>
            </AppHeader>
        );
    }
}

export default HeaderWrapper;
