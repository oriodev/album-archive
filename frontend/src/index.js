import React from 'react';
import ReactDOM from 'react-dom/client';

// redux
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import albumsReducer from './reducers/albums';
import sortingReducer from './reducers/sorting';
import notificationReducer from './reducers/notifications';

import App from './App';

// material-ui
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme';

const middleware = [thunk, logger];

const store = configureStore({
  reducer: {
    albums: albumsReducer,
    sorting: sortingReducer,
    notifications: notificationReducer,
  },
  middleware: middleware,
  logger,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>
);
