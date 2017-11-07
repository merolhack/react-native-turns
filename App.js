import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

// We Import our Stylesheet
import GeneralStyle from "./js/GeneralStyle";

export default class App extends Component {
  state = {
    counterG1: 0,
    counterG2: 0,
  }

  /**
   * Shows the alert component
   * 
   * @param {string} groupName 
   * @param {string} stateName 
   */
  setAlertVisible(groupName, stateName) {
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

  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: 22}}>
          <Text style={styles.h1}>Tome su turno</Text>
        </View>
        <View style={{marginTop: 22}}>
          <Button onPress={() => {
              this.setAlertVisible('G1', 'counterG1')
            }}
            title="Grupo 1" />
        </View>
        <View style={{marginTop: 22}}>
          <Button onPress={() => {
              this.setAlertVisible('G2','counterG2')
            }}
            title="Grupo 2" />
        </View>
      </View>
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
  },
});
