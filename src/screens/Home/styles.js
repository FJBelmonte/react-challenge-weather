import {StyleSheet} from 'react-native';
import layout from '../../constants/layout';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ccccff'},
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
  warningContainer: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    paddingBottom: 50,
  },
  warningLottieContainer: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  primaryText: {
    fontFamily: 'helvetica',
    fontSize: 18,
    textAlign: 'center',
  },
  secondaryText: {
    fontFamily: 'helvetica',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
});
