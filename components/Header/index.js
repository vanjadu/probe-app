import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/tesla_logo.png')}
      />
      <Image
        style={styles.burger}
        source={require('../../assets/burger.png')}
      />
    </View>
  );
};

export default Header;
