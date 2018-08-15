import React from 'react';
import ReactDOM from 'react-dom';
import Powerbar from '../Powerbar';

const props = {
  onClick: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Powerbar {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
