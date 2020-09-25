import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class App extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Bonjour, comment ca va ?</Text>
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
