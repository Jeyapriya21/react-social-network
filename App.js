import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Forgot from './screens/Forgot';
import Friends from './screens/Friends';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Register from './screens/Register';

export default class App extends React.Component {

    state = {
        nomEcran: 'Login'
    }

    render() {
        let ecran = null;
        if (this.state.nomEcran == 'Login') {
            ecran = (<Login />);
        } else if (this.state.nomEcran == 'Forgot') {
            ecran = (<Forgot />);
        } else if (this.state.nomEcran == 'Friends') {
            ecran = (<Friends />);
        } else if (this.state.nomEcran == 'Profile') {
            ecran = (<Profile />);
        } else if (this.state.nomEcran == 'Register') {
            ecran = (<Register />);
        } else {
            ecran = null;
        }
        return (
            <View style={styles.container}>
                {ecran}
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
