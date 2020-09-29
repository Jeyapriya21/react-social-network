import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import ServiceContext from '../ServiceContext';

export default class Friends extends React.Component {

    static contextType = ServiceContext;

    state = {
        listOfFollowees: []
    }

    componentDidMount() {
        this.setState({
            listOfFollowees: this.context.userService.listFollowees(this.props.currentUser.id)
        })
    }

    render() {
        let listOfFollowees = [];

        for(const user of this.state.listOfFollowees) {
            const element = (
                <View>
                    <Text>{user.firstname} {user.lastname}</Text>
                    <Button title="Unfollow" />
                </View>
            );
            listOfFollowees.push(element);
        }

        return (
            <View style={styles.container}>
                <Text>Friends</Text>
                <Button title="Retour"  onPress={this.props.changeScreen('Profile')} />
                {listOfFollowees}
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
