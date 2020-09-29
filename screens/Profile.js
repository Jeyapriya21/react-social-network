import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import ServiceContext from '../ServiceContext';

export default class Profile extends React.Component {

    static contextType = ServiceContext;

    // 1. Pas de state = pas de vue (l'écran ne va pas se rafraichir)
    state = {
        listeDePosts: [],
        postText: ''
    }

    // 2. React execute componentDidMount lors de l'initialisation
    componentDidMount() {
        this.setState({
            listeDePosts: this.context.postService.list(this.props.currentUser.id)
        })
    }

    // 3. Method factory (personnalisé la méthode avec un post)
    handleLike = (post) => () => {
        this.context.postService.update(post.id, 'likes', post.likes + 1);
        this.setState({
            listeDePosts: this.context.postService.list(this.props.currentUser.id)
        });
    }

    handleChangePostText = (text) => {
        this.setState({
            postText: text
        })
    }

    handlePost = () => {
        this.context.postService.create(this.props.currentUser.id, this.state.postText);
        this.setState({
            listeDePosts: this.context.postService.list(this.props.currentUser.id)
        });
    }

    // 4. Render est exécuté plein de fois par React (autant de fois qu'il le faut)
    // DONC - Pas d'appel aux API ici = risque de bannissement, couts énormes
    render() {
        let listeDesTagsPourLesPosts = [];
        for (const post of this.state.listeDePosts) {
            const element = (
                <View>
                    <Text>{post.content}</Text>
                    <Text>{post.likes} Like</Text>
                    <Button title="Liker" onPress={this.handleLike(post)} />
                </View>
            );
            listeDesTagsPourLesPosts.push(element);
        }

        return (
            <View style={styles.container}>
                <Text>Profile</Text>
                <Text>Bonjour {this.props.currentUser.firstname} !</Text>
                <TextInput value={this.state.postText} onChangeText={this.handleChangePostText} />
                <Button title="Poster" onPress={this.handlePost} />
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
