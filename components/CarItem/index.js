import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.backgroundImage} />
      <View style={styles.titles}>
        <Text style={styles.headline}>{name}</Text>
        <Text style={styles.subHeadline}>
          {tagline} <Text style={styles.taglineCta}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton primary={true} content="Custom order" />
        <StyledButton content="Existing inventory" />
      </View>
    </View>
  );
};

export default CarItem;
