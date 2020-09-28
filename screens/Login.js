import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default class Login extends React.Component {

    state = {
        username: ''
    }

    handleChangeUsername = (text) => {
        this.setState({
            username: text
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
                <TextInput value={this.state.username} onChangeText={this.handleChangeUsername} />
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
