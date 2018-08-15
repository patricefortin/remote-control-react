import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '../components/Grid';
import { ButtonGroup, ButtonOn, ButtonOff } from '../components/Button';
import { Card } from '../components/Card';

const BASE_URL = 'http://192.168.1.148/api';

const RotationOn = ({onClick}) => <ButtonOn
  label="ON" 
  onClick={onClick} 
  baseUrl={BASE_URL}
  target="left"
  value="1"
/>;

const RotationOff = ({onClick}) => <ButtonOff
  label="OFF" 
  onClick={onClick} 
  baseUrl={BASE_URL}
  target="left"
  value="0"
/>;

const LightOn = ({onClick}) => <ButtonOn
  label="ON" 
  onClick={onClick} 
  baseUrl={BASE_URL}
  target="right"
  value="1"
/>;

const LightOff = ({onClick}) => <ButtonOff
  label="OFF" 
  onClick={onClick} 
  baseUrl={BASE_URL}
  target="right"
  value="0"
/>;

const Light = (props) => (
  <Card title='Lumière'>
    <ButtonGroup>
      <LightOff {...props} />
      <LightOn {...props} />
    </ButtonGroup>
  </Card>
);

const Rotation = (props) => (
  <Card title='Rotation'>
    <ButtonGroup>
      <RotationOff {...props} />
      <RotationOn {...props} />
    </ButtonGroup>
  </Card>
);


const Disco = (props) => (
  <Container>
    <Light {...props} />
    <Rotation {...props} />
  </Container>
);

Disco.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Disco;
