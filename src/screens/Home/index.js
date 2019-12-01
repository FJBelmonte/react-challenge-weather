navigator.geolocation = require('@react-native-community/geolocation');

import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import Button from '../../components/Button';
import Loading from '../../components/Loading';
import WarningLocation from '../../components/WarningLocation';
import WeatherCard from '../../components/WeatherCard';
import geolocation from '@react-native-community/geolocation';
import styles from './styles';
import weatherAPI from '../../services/openWeatherMap';

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);

  // runs on screen startup
  useEffect(() => {
    askPermission();
    getLocation();
  }, []);

  // watch location and call async update
  useEffect(() => {
    if (location) asyncGetWeather();
  }, [location]);

  // create location according to user position
  function getLocation() {
    geolocation.getCurrentPosition(
      e => {
        setLocation({
          lat: e.coords.latitude,
          lon: e.coords.longitude,
        });
      },
      err => console.log(err),
    );
  }

  // ask permission to use geolocation
  function askPermission() {
    geolocation.requestAuthorization();
  }

  // request weather data api
  async function asyncGetWeather() {
    let encodedLocation = `lat=${location.lat}&lon=${location.lon}`;
    const response = await weatherAPI.get(`&${encodedLocation}`);
    setWeather(response.data);
  }

  // handle 'Atualizar' button behavior and clean weather
  function handleRefreshButton() {
    setWeather(null);
    getLocation();
  }

  function renderClimate() {
    // render WeatherCard
    if (location) {
      if (weather) {
        return (
          <View style={styles.loadingContainer}>
            <WeatherCard data={weather} />
          </View>
        );
      }
      // render Loading
      return (
        <View style={styles.loadingContainer}>
          <Loading />
        </View>
      );
    }
    // render warning if user has not given permission
    return (
      <View style={styles.warningContainer}>
        <View style={styles.warningLottieContainer}>
          <WarningLocation />
        </View>
        <Text style={styles.primaryText}>
          Precisamos de sua permissão para acesso de localização para a
          utilização esse aplicativo
        </Text>
        <Text style={styles.secondaryText}>
          We need your permission for location access to use this app
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>{renderClimate()}</View>
      <View style={styles.footer}>
        <View style={styles.buttonsContainer}>
          <Button onPress={handleRefreshButton}>Atualizar</Button>
        </View>
      </View>
    </View>
  );
}
