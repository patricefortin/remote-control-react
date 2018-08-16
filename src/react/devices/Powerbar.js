import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as powerbar from '../../actions/powerbar';

import { Container, Row, Col } from '../components/Grid';
import { Card } from '../components/Card';
import { ButtonGroup, ButtonOn, ButtonOff } from '../components/Button';

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  leftOn: () => dispatch(powerbar.leftOn()),
  leftOff: () => dispatch(powerbar.leftOff()),
  rightOn: () => dispatch(powerbar.rightOn()),
  rightOff: () => dispatch(powerbar.rightOff()),
})

const ButtonLeftOn = (props) => <ButtonOn
  label="ON" 
  onClick={props.leftOn} 
/>;

const ButtonLeftOff = (props) => <ButtonOff
  label="OFF" 
  onClick={props.leftOff} 
/>;

const ButtonRightOn = (props) => <ButtonOn
  label="ON" 
  onClick={props.rightOn} 
/>;

const ButtonRightOff = (props) => <ButtonOff
  label="OFF" 
  onClick={props.rightOff} 
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

export default connect(mapStateToProps, mapDispatchToProps)(Powerbar);