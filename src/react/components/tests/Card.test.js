import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from '../Card';

const props = {
  title: 'foo',
};

it('can render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
