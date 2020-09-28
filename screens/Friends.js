import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default class Friends extends React.Component {

    state = {
        searchText: ''
    }

    handleChangeSearchText = (text) => {
        this.setState({
            searchText: text
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Friends</Text>
                <TextInput value={this.state.searchText} onChangeText={this.handleChangeSearchText} />
                <Button title="Retour"  onPress={this.props.changeScreen('Profile')} />
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
