import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Friends extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Friends</Text>
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
