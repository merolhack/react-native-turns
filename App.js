import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Button, CheckBox } from 'react-native';
// External dependencies
import { Col, Row, Grid } from "react-native-easy-grid";
import SplashScreen from 'react-native-splash-screen';

// We Import our Stylesheet
import GeneralStyle from "./js/GeneralStyle";

export default class App extends Component {
  state = {
    counterG1: 0,
    counterG2: 0,
    disabled: false,
  }

  constructor() {
    
  }

  /**
   * Shows the alert component
   * 
   * @param {string} groupName 
   * @param {string} stateName 
   */
  _setAlertVisible = (groupName, stateName) => {
    const increment = this.state[stateName] + 1;
    this.setState({ [stateName]: increment });
    Alert.alert(
      'Turno',
      `Se ha impreso su turno #${groupName} - ${increment}`,
      [
        {text: 'Aceptar', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    );
  }

  /**
   * Change the state of the checkbox
   */
  _setDisabled = () => {
    this.setState({disabled: !this.state.disabled});
  }

  /**
   * 
   */
  _postCreateTurn = (groupName, stateName) => {const io = require('socket.io')();
    return fetch('https://facebook.github.io/react-native/movies.json', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(JSON.stringify(responseJson));
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <Grid>
        <Row style={{marginTop: 22, marginBottom: 22, height: 40}}>
          <Col>
            <Text style={styles.h1}>Tome su turno</Text>
          </Col>
          <Col>
            <Row>
              <Col style={{ width: 35 }}>
                <CheckBox
                  onValueChange={this._setDisabled}
                  value={this.state.disabled} />
              </Col>
              <Col>
                <Text style={{ marginTop: 5 }}>Discapacitado</Text>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row style={styles.row}>
              <Button onPress={() => {
                  this._postCreateTurn('G1', 'counterG1')
                }}
                title="Moto A" />
            </Row>
          </Col>
          <Col>
            <Row style={styles.row}>
              <Button style={styles.btn} onPress={() => {
                  this._setAlertVisible('G2','counterG2')
                }}
                title="Moto B" />
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row style={styles.row}>
              <Button onPress={() => {
                  this._setAlertVisible('G1', 'counterG1')
                }}
                title="Moto C" />
            </Row>
          </Col>
          <Col>
            <Row style={styles.row}>
              <Button onPress={() => {
                  this._setAlertVisible('G2','counterG2')
                }}
                title="Moto D" />
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row style={styles.row}>
              <Button onPress={() => {
                  this._setAlertVisible('G1', 'counterG1')
                }}
                title="Moto E" />
            </Row>
          </Col>
          <Col>
            <Row style={styles.row}>
              <Button onPress={() => {
                  this._setAlertVisible('G2','counterG2')
                }}
                title="Moto F" />
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: GeneralStyle.FONT_SIZE_TITLE,
    lineHeight: GeneralStyle.FONT_SIZE_TITLE * 1.5,
    textAlign: 'center',
  },
  row: {
    marginTop: 22,
    marginRight: 22,
    marginBottom: 22,
    marginLeft: 22
  },
  btn: {
    width: '100%',
  }
});
