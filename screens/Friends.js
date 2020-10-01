import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ServiceContext from '../ServiceContext';
import AppButton from '../customs/AppButton';

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

        for (const user of this.state.listOfFollowees) {
            const element = (
                <View style={styles.friendSpan}>
                    <Text>{user.firstname} {user.lastname}</Text>
                    <AppButton title="Unfollow" classBtn="third" />
                </View>
            );
            listOfFollowees.push(element);
        }

        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <Text style={styles.helloSmall}>Voici</Text>
                    <Text style={styles.helloBig}>Vos amis</Text>
                </View>
                <Text style={styles.description}>Vous trouverez ici la liste de vos amis avec qui vous partagez des affinités</Text>
                <AppButton title="Retour" onPress={this.props.changeScreen('Profile')} />
                <View style={styles.friendsList}>
                    {listOfFollowees}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    helloSmall: {
        fontSize: 14
    },
    helloBig: {
        fontSize: 45,
        color: '#187883'
    },
    left: {
        alignItems: 'left',
        alignSelf: 'stretch',
        margin: 30,
    },
    friendsList: {
        flex: 1,
        alignSelf: 'stretch',
        borderTopWidth: 1,
        borderColor: '#DDD',
        padding: 20,
        marginTop: 20
    },
    friendSpan: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    description: {
        fontSize: 14,
        alignSelf: 'stretch',
        paddingLeft: 20,
        marginBottom: 20
    }
});
