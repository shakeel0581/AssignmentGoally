import React, { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default function Loading({ navigation }) {
  return (
    <View
      style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
 
    </View>
  );
}
