import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

// We Import our Stylesheet
import Style from "./js/Style";

export default class App extends Component {
  setAlertVisible(group) {
    Alert.alert(
      'Turno',
      `Se ha impreso su turno #${group} - 123`,
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
          <Text style={styles.text}>Tome su turno</Text>
        </View>
        <View style={{marginTop: 22}}>
          <Button onPress={() => {
              this.setAlertVisible('G1')
            }}
            title="Grupo 1" />
        </View>
        <View style={{marginTop: 22}}>
        <Button onPress={() => {
            this.setAlertVisible('G2')
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
  text: {
    fontSize: Style.FONT_SIZE,
    lineHeight: Style.FONT_SIZE * 1.5,
  },
});
