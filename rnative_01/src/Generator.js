import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Generator = () => {
  return (
    <View style={styles.generator}>
      <Text style={{ color: '#FFFF' }}>Add number</Text>
    </View>
  );
};

styles = StyleSheet.create({
  generator: {
    backgroundColor: '#00bcd4',
    alignItems: 'center',
    width: ' 100%',
    padding: 10
  }
});

export default Generator;
