import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Forgot extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Forgot</Text>
                <Button title="Retour"  onPress={this.props.changeScreen('Login')} />
                <Button title="Valider"  onPress={this.props.changeScreen('Login')} />
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
