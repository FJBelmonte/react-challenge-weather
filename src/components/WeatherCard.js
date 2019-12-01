// data    |> geocoding object

import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import layout from '../constants/layout';

export default function WeatherCard(props) {
  return (
    <View
      style={[styles.container, {backgroundColor: 'rgba(230,230,100,0.9)'}]}>
      <View style={styles.contentContainer}>
        <Text style={styles.textCity}>{props.data.name}</Text>
        <Text style={styles.textMainTemp}>
          {`${Math.round(kToC(props.data.main.temp), -1)} °C`}
        </Text>
        <View style={styles.containerFooter}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {height: 300, width: layout.window.width * 0.8, borderRadius: 10},
  contentContainer: {flex: 1},
  textCity: {
    fontFamily: 'helvetica',
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    alignSelf: 'stretch',
  },
  textMainTemp: {
    fontFamily: 'helvetica',
    fontSize: 28,
    textAlign: 'center',
    padding: 5,
    alignSelf: 'stretch',
  },
  containerFooter: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    flexDirection: 'row',
  },
});

// Converts Kelvin to Celsius
function kToC(k) {
  return k - 273.15;
}
