import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Profile extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Profile</Text>
                <Button title="Voir mes amis"  onPress={this.props.changeScreen('Friends')} />
                <Button title="Déconnexion"  onPress={this.props.changeScreen('Login')} />
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
