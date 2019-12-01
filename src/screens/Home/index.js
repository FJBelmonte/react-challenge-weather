navigator.geolocation = require('@react-native-community/geolocation');

import {Alert, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import Button from '../../components/Button';
import Loading from '../../components/Loading';
import WarningLocation from './WarningLocation';
import WeatherCard from '../../components/WeatherCard';
import geolocation from '@react-native-community/geolocation';
import styles from './styles';
import weatherAPI from '../../services/openWeatherMap';

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [locationPermission, setLocationPermission] = useState(false);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    askPermission();
    getLocation();
  }, []);

  useEffect(() => {
    asyncGetWeather();
  }, [location]);

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

  function askPermission() {
    geolocation.requestAuthorization();
  }

  function handleRefreshButton() {
    askPermission();
    getLocation();
  }

  async function asyncGetWeather() {
    let encodedLocation = `lat=${location.lat}&lon=${location.lon}`;
    const response = await weatherAPI.get(`&${encodedLocation}`);
    setWeather(response.data);
  }

  function renderClimate() {
    if (locationPermission || location) {
      if (weather) {
        return (
          <View style={styles.loadingContainer}>
            <WeatherCard data={weather} />
          </View>
        );
      }

      return (
        <View style={styles.loadingContainer}>
          <Loading />
        </View>
      );
    }
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
