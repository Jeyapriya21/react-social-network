/**
 * Version 2
 */

const { View } = require("react-native");

handleChangeScreenLogin = () => {
    this.setState({
        nomEcran: 'Login'
    });
}

handleChangeScreenForgot = () => {
    this.setState({
        nomEcran: 'Forgot'
    });
}

handleChangeScreenRegister = () => {
    this.setState({
        nomEcran: 'Register'
    });
}

<View>
    <Button title="Aller à Login" onPress={this.handleChangeScreenLogin} />
    <Button title="Aller à Forgot" onPress={this.handleChangeScreenForgot} />
    <Button title="Aller à Register" onPress={this.handleChangeScreenRegister} />
</View>