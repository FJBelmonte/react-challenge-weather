import LottieView from 'lottie-react-native';
import React from 'react';
import location from '../../assets/lottie/location.json';

export default function WarningLocation() {
  return (
    <LottieView autoPlay autoSize loop resizeMode="contain" source={location} />
  );
}
