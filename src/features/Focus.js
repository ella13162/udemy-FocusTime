import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {colors} from '../utils/colors';

export const Focus = () => (
  <View style={styles.container}>
  <Text style={styles.text}>Focused Features</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: colors.darkBlue,
  },
  text: {
    color: colors.white,
  }
});