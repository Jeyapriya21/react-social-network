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

    handleChangeScreen = (pageEnQuestion) => () => {
        this.setState({
            nomEcran: pageEnQuestion
        });
    }

    render() {
        let ecran = null;
        if (this.state.nomEcran == 'Login') {
            ecran = (<Login changeScreen={this.handleChangeScreen} />);
        } else if (this.state.nomEcran == 'Forgot') {
            ecran = (<Forgot changeScreen={this.handleChangeScreen} />);
        } else if (this.state.nomEcran == 'Friends') {
            ecran = (<Friends changeScreen={this.handleChangeScreen} />);
        } else if (this.state.nomEcran == 'Profile') {
            ecran = (<Profile changeScreen={this.handleChangeScreen} />);
        } else if (this.state.nomEcran == 'Register') {
            ecran = (<Register changeScreen={this.handleChangeScreen} />);
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
