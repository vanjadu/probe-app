import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: '100%',
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  headline: {
    fontSize: 40,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 5,
  },
  subHeadline: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.7,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
  taglineCta: {
    textDecorationLine: 'underline',
  },
});

export default styles;
