import * as React from 'react';
import { store } from '../src/store';
import { Provider } from 'react-redux'

export const withProvider = (story) => (
  <Provider store={store}>
    { story() }
  </Provider>
)