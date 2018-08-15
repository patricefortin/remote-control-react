import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../Navbar';

it('can render a button', () => {
  const props = {
    onClick: jest.fn(),
  };

  const div = document.createElement('div');
  ReactDOM.render(<Navbar {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

