import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default class Register extends React.Component {

    state = {
        email: '',
        username: '',
        firstname: '',
        lastname: '',
        password: '',
        confirmPassword: ''
    }

    handleChangeEmail = (text) => {
        this.setState({
            email: text
        })
    }

    handleChangeUsername = (text) => {
        this.setState({
            username: text
        })
    }

    handleChangeFirstname = (text) => {
        this.setState({
            firstname: text
        })
    }

    handleChangeLastname = (text) => {
        this.setState({
            lastname: text
        })
    }

    handleChangePassword = (text) => {
        this.setState({
            password: text
        })
    }

    handleChangeConfirmPassword = (text) => {
        this.setState({
            confirmPassword: text
        })
    }

    render() {
        /**
         * EMAIL
         * USERNAME = NICKNAME
         * FIRSTNAME
         * LASTNAME
         * PASSWORD
         * CONFIRM_PASSWORD
         */
        return (
            <View style={styles.container}>
                <Text>Register</Text>
                <TextInput value={this.state.email} onChangeText={this.handleChangeEmail} />
                <TextInput value={this.state.username} onChangeText={this.handleChangeUsername} />
                <TextInput value={this.state.firstname} onChangeText={this.handleChangeFirstname} />
                <TextInput value={this.state.lastname} onChangeText={this.handleChangeLastname} />
                <TextInput secureTextEntry={true} value={this.state.password} onChangeText={this.handleChangePassword} />
                <TextInput secureTextEntry={true} value={this.state.confirmPassword} onChangeText={this.handleChangeConfirmPassword} />
                <Button title="Retour"  onPress={this.props.changeScreen('Login')} />
                <Button title="Valider"  onPress={this.props.changeScreen('Profile')} />
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
