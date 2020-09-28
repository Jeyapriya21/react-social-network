import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import ServiceContext from '../ServiceContext';

export default class Login extends React.Component {

    static contextType = ServiceContext;

    state = {
        username: '',
        password: ''
    }

    handleChangeUsername = (text) => {
        this.setState({
            username: text
        })
    }

    handleChangePassword = (text) => {
        this.setState({
            password: text
        })
    }

    handleLogin = () => {
        const user = this.context.userService.authorize(this.state.username, this.state.password);
        if (user != null) {
            this.props.changeScreen('Profile')();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
                <TextInput value={this.state.username} onChangeText={this.handleChangeUsername} />
                <TextInput secureTextEntry={true} value={this.state.password} onChangeText={this.handleChangePassword} />
                <Button title="S'identifier" onPress={this.handleLogin} />
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
