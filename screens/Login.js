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
            this.props.changeUser(user);
            this.props.changeScreen('Profile')();
        }
    }

    render() {
        return (
            // class="container" => style={styles.container}
            <View style={styles.container}>
                <Text style={styles.textForLogin}>Bienvenue</Text>
                <TextInput placeholder="Username ..." style={styles.inputToto} value={this.state.username} onChangeText={this.handleChangeUsername} />
                <TextInput placeholder="Password ..." style={styles.inputToto} secureTextEntry={true} value={this.state.password} onChangeText={this.handleChangePassword} />
                <Button title="S'identifier" onPress={this.handleLogin} />
                <Button title="S'enregister" onPress={this.props.changeScreen('Register')} />
                <Button title="Mot de passe oublié" onPress={this.props.changeScreen('Forgot')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEE', // background-color => backgroundColor
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputToto: {
        borderWidth: 1,
        padding: 5,
        margin: 5,
        borderColor: '#DDD'
    },
    textForLogin: {
        fontSize: 26,
        marginBottom: 20
    }
});
