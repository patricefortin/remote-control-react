import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as disco from '../../actions/disco';

import { Container } from '../components/Grid';
import { ButtonGroup, Button, ButtonOn, ButtonOff } from '../components/Button';
import { Card } from '../components/Card';

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  allOn: () => dispatch(disco.allOn()),
  allOff: () => dispatch(disco.allOff()),
  lightOn: () => dispatch(disco.lightOn()),
  lightOff: () => dispatch(disco.lightOff()),
  rotationOn: () => dispatch(disco.rotationOn()),
  rotationOff: () => dispatch(disco.rotationOff()),
})

const AllOn = (props) => <ButtonOn
  label="Party!!!" 
  onClick={props.allOn}
/>;

const AllOff = (props) => <ButtonOff
  label="No Party" 
  onClick={props.allOff}
/>;

const RotationOn = (props) => <ButtonOn
  label="ON" 
  onClick={props.rotationOn}
/>;

const RotationOff = (props) => <ButtonOff
  label="OFF" 
  onClick={props.rotationOff}
/>;

const LightOn = (props) => <ButtonOn
  label="ON" 
  onClick={props.lightOn}
/>;

const LightOff = (props) => <ButtonOff
  label="OFF" 
  onClick={props.lightOff}
/>;

const Full = (props) => (
  <Card title='Boule disco'>
    <ButtonGroup>
      <AllOff {...props} />
      <AllOn {...props} />
    </ButtonGroup>
  </Card>
);

const Light = (props) => (
  <Card title='Lumière seulement'>
    <ButtonGroup>
      <LightOff {...props} />
      <LightOn {...props} />
    </ButtonGroup>
  </Card>
);

const Rotation = (props) => (
  <Card title='Rotation seulement'>
    <ButtonGroup>
      <RotationOff {...props} />
      <RotationOn {...props} />
    </ButtonGroup>
  </Card>
);


const Disco = (props) => (
  <Container>
    <Full {...props} />
    <Light {...props} />
    <Rotation {...props} />
  </Container>
);

Disco.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Disco);
