import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ServiceContext from '../ServiceContext';
import AppButton from '../customs/AppButton';
import AppInput from '../customs/AppInput';

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
                <View style={styles.postCard}>
                    <Text style={styles.likeText}>{post.likes} Like</Text>
                    <View style={styles.centerRow}>
                        <Text style={styles.contentText}>{post.content}</Text>
                        <AppButton title="Liker" onPress={this.handleLike(post)} />
                    </View>
                </View>
            );
            listeDesTagsPourLesPosts.push(element);
        }

        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <Text style={styles.helloSmall}>Bonjour</Text>
                    <Text style={styles.helloBig}>{this.props.currentUser.firstname} !</Text>
                </View>
                <View style={styles.centerRow}>
                    <AppButton title="Voir mes amis" onPress={this.props.changeScreen('Friends')} classBtn="third" />
                    <AppButton title="Déconnexion" onPress={this.props.changeScreen('Login')} />
                </View>
                <View style={styles.inputPost}>
                    <AppInput placeholder="Votre text ici ..." value={this.state.postText} onChangeText={this.handleChangePostText} />
                    <AppButton title="Poster" onPress={this.handlePost} classBtn="primary" />
                </View>
                <View style={styles.postsView}>
                    {listeDesTagsPourLesPosts}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerRow: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    inputPost: {
        alignItems: 'center',
        flexDirection: 'row',
        margin: 20
    },
    postsView: {
        flex: 1,
        alignSelf: 'stretch',
        borderTopWidth: 1,
        borderColor: '#DDD',
        padding: 20
    },
    left: {
        alignItems: 'left',
        alignSelf: 'stretch',
        margin: 30,
    },
    helloSmall: {
        fontSize: 14
    },
    helloBig: {
        fontSize: 45,
        color: '#187883'
    },
    postCard: {
        alignSelf: 'stretch',
    },  
    contentText: {
        width: 250,
        fontSize: 16
    },
    likeText: {
        fontSize: 12,
        color: '#799dde'
    }
});
