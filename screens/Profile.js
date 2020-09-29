import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import ServiceContext from '../ServiceContext';

export default class Profile extends React.Component {

    static contextType = ServiceContext;

    render() {

        let listeDesTagsPourLesPosts = [];

        const listeDePosts = this.context.postService.list();

        for (const post of listeDePosts) {
            const element = (
                <View>
                    <Text>{post.content}</Text>
                    <Text>{post.likes} Like</Text>
                    <Button title="Liker" />
                </View>
            );
            listeDesTagsPourLesPosts.push(element);
        }

        return (
            <View style={styles.container}>
                <Text>Profile</Text>
                <Button title="Voir mes amis"  onPress={this.props.changeScreen('Friends')} />
                <Button title="Déconnexion"  onPress={this.props.changeScreen('Login')} />
                {listeDesTagsPourLesPosts}
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
