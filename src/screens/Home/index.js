import {Alert, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import Button from '../../components/Button';
import Loading from '../../components/Loading';
import styles from './styles';

export default function Home() {
  const [weather, setWeather] = useState(null);
  function handleRefreshButton() {
    Alert.alert('Test');
  }
  function renderClimate() {
    if (weather) {
      return <Text>WEATHER</Text>;
    }
    return (
      <View style={styles.loadingContainer}>
        <Loading />
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>{renderClimate()}</View>
      <View style={styles.contentContainer}>
        <Button onPress={handleRefreshButton}>Refresh</Button>
      </View>
    </View>
  );
}
