import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import React from 'react';
import layout from '../constants/layout';

// onPress      |> Function
// style        |> StyleSheet Object
// textStyle    |> Object
// children     |> Text

export default function Button(props) {
  return (
    <TouchableOpacity
      style={[styles.button, {...props.style}]}
      onPress={props.onPress}>
      <Text style={[styles.buttonText, {...props.textStyle}]}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}
Button.defaultProps = {
  onPress: () => {},
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: '#ff9999',
    width: layout.window.width * 0.6,
    marginVertical: 5,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
