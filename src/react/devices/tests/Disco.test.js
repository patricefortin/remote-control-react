import React from 'react';
import ReactDOM from 'react-dom';
import Disco from '../Disco';

const props = {
  onClick: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Disco {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

