import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Nav = props => {
  return (
    <View style={styles.nav}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#b10e95',
    // , #e72f4e
    alignItems: 'center',
    padding: 10,
    width: '100%'
  },
  text: {
    color: '#ffff'
  }
});
export default Nav;
