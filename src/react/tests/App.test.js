import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from '../App';


const mockStore = configureStore();
const initialState = {};

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = mockStore(initialState);
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
