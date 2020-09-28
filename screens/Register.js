import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Register extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Register</Text>
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
