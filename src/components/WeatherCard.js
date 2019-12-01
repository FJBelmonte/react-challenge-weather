// data    |> geocoding object

import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import WeatherIcon from './WeatherIcon';
import layout from '../constants/layout';

export default function WeatherCard(props) {
  // Returns main weather according to id in brazilian portuguese
  function setDes() {
    const weatherId = props.data.weather[0].id;
    if (weatherId === '800') {
      return 'Céu limpo';
    } else {
      switch (`${weatherId}`.substring(0, 1)) {
        case '2':
          return 'tempestade';
        case '3':
          return 'chuvisco';
        case '5':
          return 'chuva';
        case '6':
          return 'neve';
        case '7':
          return 'atmosférico';
        case '8':
          return 'nuvens';
      }
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.iconContainer}>
          <WeatherIcon icon={props.data.weather[0].icon} />
        </View>
        <Text style={styles.textCity}>{props.data.name}</Text>
        <Text style={styles.textMainTemp}>
          {`${Math.round(kToC(props.data.main.temp), -1)} °`}
        </Text>
        <Text style={styles.textDesc}>{setDes()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: layout.window.width,
  },
  textCity: {
    fontFamily: 'helvetica',
    fontSize: 26,
    textAlign: 'center',
    padding: 10,
    alignSelf: 'stretch',
  },
  textMainTemp: {
    fontFamily: 'helvetica',
    fontSize: 60,
    textAlign: 'center',
    padding: 5,
    alignSelf: 'stretch',
    fontWeight: 'bold',
    color: '#000',
  },
  textDesc: {
    fontFamily: 'helvetica',
    fontSize: 26,
    textAlign: 'center',
    padding: 10,
    alignSelf: 'stretch',
  },

  iconContainer: {alignSelf: 'center', padding: 10},
});

// Converts Kelvin to Celsius
function kToC(k) {
  return k - 273.15;
}
