import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
// import ThemeProvider from 'styled-components';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { themes } from './themes';

const muiTheme = getMuiTheme(themes.muiTheme);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <App />
        </MuiThemeProvider>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
