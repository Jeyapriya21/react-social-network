import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Forgot from './screens/Forgot';
import Friends from './screens/Friends';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Register from './screens/Register';

export default class App extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Forgot />
                <Friends />
                <Login />
                <Profile />
                <Register />
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
