import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Friends extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Friends</Text>
                <Button title="Retour"  onPress={this.props.changeScreen('Profile')} />
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
