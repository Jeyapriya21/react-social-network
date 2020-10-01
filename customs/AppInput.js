import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default ({ value, onChangeText, placeholder, secureTextEntry=false }) => (
    <TextInput secureTextEntry={secureTextEntry} placeholder={placeholder} style={styles.input} value={value} onChangeText={onChangeText} />
);

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 10,
        margin: 10,
        borderColor: '#EEE',
        backgroundColor: '#E5E5E5',
        borderRadius: 5,
        width: 200
    }
});
