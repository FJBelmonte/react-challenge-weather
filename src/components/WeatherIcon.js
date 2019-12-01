import {StyleSheet, View} from 'react-native';

import React from 'react';
// clear sky
import Svg01d from '../assets/svg/050-sun.svg';
import Svg01n from '../assets/svg/034-moon.svg';
// few clouds
import Svg02d from '../assets/svg/005-cloudy-3.svg';
import Svg02n from '../assets/svg/009-cloud.svg';
// scattered clouds
import Svg03d from '../assets/svg/003-cloudy-4.svg';
import Svg03n from '../assets/svg/043-cloudy.svg';
// broken clouds
import Svg04d from '../assets/svg/049-clouds.svg';
import Svg04n from '../assets/svg/049-clouds.svg';
// shower rain
import Svg09d from '../assets/svg/040-rain.svg';
import Svg09n from '../assets/svg/040-rain.svg';
// rain
import Svg10d from '../assets/svg/038-rain-1.svg';
import Svg10n from '../assets/svg/011-night-rain.svg';
// thunderstorm
import Svg11d from '../assets/svg/021-storm-1.svg';
import Svg11n from '../assets/svg/021-storm-1.svg';
// snow
import Svg13d from '../assets/svg/018-snowflake.svg';
import Svg13n from '../assets/svg/018-snowflake.svg';
// mist
import Svg50d from '../assets/svg/030-clouds-1.svg';
import Svg50n from '../assets/svg/030-clouds-1.svg';
// Default
import SvgDefault from '../assets/svg/044-temperature-2.svg';

const size = 150;

export default function WeatherIcon(props) {
  function renderIcon() {
    switch (props.icon) {
      case '01d':
        return <Svg01d height={size} width={size} />;
      case '01n':
        return <Svg01n height={size} width={size} />;
      case '02d':
        return <Svg02d height={size} width={size} />;
      case '02n':
        return <Svg02n height={size} width={size} />;
      case '03d':
        return <Svg03d height={size} width={size} />;
      case '03n':
        return <Svg03n height={size} width={size} />;
      case '04d':
        return <Svg04d height={size} width={size} />;
      case '04n':
        return <Svg04n height={size} width={size} />;
      case '09d':
        return <Svg09d height={size} width={size} />;
      case '09n':
        return <Svg09n height={size} width={size} />;
      case '10d':
        return <Svg10d height={size} width={size} />;
      case '10n':
        return <Svg10n height={size} width={size} />;
      case '11d':
        return <Svg11d height={size} width={size} />;
      case '11n':
        return <Svg11n height={size} width={size} />;
      case '13d':
        return <Svg13d height={size} width={size} />;
      case '13n':
        return <Svg13n height={size} width={size} />;
      case '50d':
        return <Svg50d height={size} width={size} />;
      case '50n':
        return <Svg50n height={size} width={size} />;

      default:
        return <SvgDefault height={size} width={size} />;
    }
  }
  return <React.Fragment>{renderIcon()}</React.Fragment>;
}

WeatherIcon.defaultProps = {
  icon: 'none',
};
