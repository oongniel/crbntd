import React, { Component } from 'react';
import { Layout } from 'antd';
import Games from '../Games';
import HeaderWrapper from '../../components/Header';
const { Content, Footer } = Layout;

class App extends Component {
    render() {
        return (
            <Layout>
                <HeaderWrapper />
                <Layout>
                    <Content>
                        <Games />
                    </Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}

export default App;
