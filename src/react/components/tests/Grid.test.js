import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from '../Grid';

it('can render Container', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Container />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('can render Row', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Row />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('can render Col', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Col />, div);
  ReactDOM.unmountComponentAtNode(div);
});
