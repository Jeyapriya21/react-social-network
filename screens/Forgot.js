import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Forgot extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Forgot</Text>
            </View>
          );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
