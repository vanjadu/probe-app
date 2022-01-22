import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/model_s.jpeg')}
        style={styles.backgroundImage}
      />
      <View style={styles.titles}>
        <Text style={styles.headline}>Model S</Text>
        <Text style={styles.subHeadline}>Starting at $69,420</Text>
      </View>

      <StyledButton
        primary={true}
        content="Custom order"
        onPress={() => console.warn('Custom order was pressed')}
      />
      <StyledButton content="Custom order" />
    </View>
  );
};

export default CarItem;
