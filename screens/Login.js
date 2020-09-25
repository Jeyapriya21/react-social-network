import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Login extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
                <Button title="Se logguer" onPress={this.props.changeScreen('Profile')} />
                <Button title="S'enregister" onPress={this.props.changeScreen('Register')} />
                <Button title="Mot de passe oublié"  onPress={this.props.changeScreen('Forgot')} />
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
