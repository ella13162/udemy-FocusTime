import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';

export const Focus = () => {
  const [subject, setSubject] = usState(null)
  return(
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={setSubject} label='What would you like to focus on?'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: colors.darkBlue,
  },
  inputContainer: {
    felx: 0.5,
    padding: 25,
    justyfyContent: 'top',
  },
  text: {
    color: colors.white,
  }
});