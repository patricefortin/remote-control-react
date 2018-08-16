import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonOn, ButtonOff } from '../Button';

const props = {
  label: 'my label',
  onClick: jest.fn(),
};

it('can render a button', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('can render a ON button', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonOn {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});