import {StyleSheet} from 'react-native';
import layout from '../../constants/layout';

export default StyleSheet.create({
  container: {flex: 1},
  contentContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  loadingContainer: {
    width: layout.window.width,
    height: layout.window.width,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
