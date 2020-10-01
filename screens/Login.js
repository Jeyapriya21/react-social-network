import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ServiceContext from '../ServiceContext';
import AppButton from '../customs/AppButton';
import AppInput from '../customs/AppInput';

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
                <Text style={styles.textForLogin}>Bienvenue dans</Text>
                <Text style={styles.titleForLogin}>TeamChat</Text>
                <Text style={styles.description}>Transmettez en un éclair vos informations à l'ensemble de l'équipe de votre entreprise</Text>
                <AppInput placeholder="Username ..." style={styles.inputToto} value={this.state.username} onChangeText={this.handleChangeUsername} />
                <AppInput secureTextEntry={true} placeholder="Password ..." style={styles.inputToto} secureTextEntry={true} value={this.state.password} onChangeText={this.handleChangePassword} />
                <AppButton title="S'identifier" onPress={this.handleLogin} classBtn="primary" />
                <AppButton title="S'enregister" onPress={this.props.changeScreen('Register')} classBtn="primary" />
                <AppButton title="Mot de passe oublié" onPress={this.props.changeScreen('Forgot')} classBtn="secondary" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textForLogin: {
        fontSize: 16,
        marginBottom: 5
    },
    titleForLogin: {
        fontSize: 36,
        marginBottom: 20,
        color: '#799dde'
    },
    description: {
        fontSize: 14,
        alignSelf: 'stretch',
        paddingLeft: 20,
        marginBottom: 40,
        width: 300
    }
});
