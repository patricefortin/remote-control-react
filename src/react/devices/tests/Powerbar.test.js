import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Powerbar from '../Powerbar';

const mockStore = configureStore();
const initialState = {};

const props = {
  onClick: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = mockStore(initialState);
  ReactDOM.render(<Provider store={store}><Powerbar {...props} /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
