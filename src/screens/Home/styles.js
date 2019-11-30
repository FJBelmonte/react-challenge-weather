import {StyleSheet} from 'react-native';
import layout from '../../constants/layout';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ddddff'},
  contentContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  loadingContainer: {
    width: layout.window.width,
    height: layout.window.width,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  footer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: layout.window.height * 0.025,
    marginBottom: layout.window.height * 0.015,
  },
  buttonsContainer: {
    alignItems: 'center',
    padding: 5,
  },
});
