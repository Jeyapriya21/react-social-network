/**
 * Version 1
 */
handleChangeScreen = (pageEnQuestion) => () => {
    this.setState({
        nomEcran: pageEnQuestion
    });
}

<View>
    <Button title="Aller à Login" onPress={this.handleChangeScreen('Login')} />
    <Button title="Aller à Forgot" onPress={this.handleChangeScreen('Forgot')} />
    <Button title="Aller à Register" onPress={this.handleChangeScreen('Register')} />
</View>