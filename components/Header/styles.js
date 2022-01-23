import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    zIndex: 10,
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: 'contain',
  },
  burger: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
});

export default styles;
