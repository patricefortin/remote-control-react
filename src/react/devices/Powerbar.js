import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from '../components/Grid';
import { Card } from '../components/Card';
import { ButtonGroup, ButtonOn, ButtonOff } from '../components/Button';

const BASE_URL = 'http://192.168.1.113/api';

const ButtonLeftOn = ({onClick}) => <ButtonOn
  label="ON" 
  onClick={onClick} 
  baseUrl={BASE_URL}
  target="left"
  value="1"
/>;

const ButtonLeftOff = ({onClick}) => <ButtonOff
  label="OFF" 
  onClick={onClick} 
  baseUrl={BASE_URL}
  target="left"
  value="0"
/>;

const ButtonRightOn = ({onClick}) => <ButtonOn
  label="ON" 
  onClick={onClick} 
  baseUrl={BASE_URL}
  target="right"
  value="1"
/>;

const ButtonRightOff = ({onClick}) => <ButtonOff
  label="OFF" 
  onClick={onClick} 
  baseUrl={BASE_URL}
  target="right"
  value="0"
/>;

const Powerbar = (props) => (
  <Container>
    <Row>
      <Col>
        <Card title='Prise Gauche'>
          <ButtonGroup>
            <ButtonLeftOff {...props} />
            <ButtonLeftOn {...props} />
          </ButtonGroup>
        </Card>
      </Col>
      <Col>
        <Card title='Prise Droite'>
          <ButtonGroup>
            <ButtonRightOff {...props} />
            <ButtonRightOn {...props} />
          </ButtonGroup>
        </Card>
      </Col>
    </Row>
  </Container>
);

Powerbar.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Powerbar;