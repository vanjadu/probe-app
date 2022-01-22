import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

const StyledButton = (props) => {
  const { primary, content, onPress } = props;

  const backgroundColor = primary === true ? '#171a20cc' : '#ffffffa6';
  const textColor = primary === true ? '#fff' : '#171a20cc';

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
