import React from 'react';
import ReactDOM from 'react-dom/client';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import albumsReducer from './reducers/albums';

import App from './App';

const store = configureStore({
  reducer: {
    albums: albumsReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
