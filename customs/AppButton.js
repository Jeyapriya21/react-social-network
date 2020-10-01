import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default ({ onPress, title, classBtn }) => (
    <TouchableOpacity onPress={onPress} style={classBtn == 'primary' ? styles.appButtonContainer : 
        classBtn == 'third' ? styles.appButtonContainerThird : styles.appButtonContainerSecondary}>
        <Text style={classBtn == 'primary' ? styles.appButtonText :
        classBtn == 'third' ? styles.appButtonTextThird : styles.appButtonTextSecondary}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    appButtonContainer: {
        backgroundColor: '#68bfbf',
        margin: 10,
        padding: 10,
        borderRadius: 10
    },
    appButtonContainerSecondary: {
        backgroundColor: '#EEE',
        margin: 10,
        padding: 10,
        borderRadius: 10
    },
    appButtonContainerThird: {
        backgroundColor: '#799dde',
        margin: 10,
        padding: 10,
        borderRadius: 10
    },
    appButtonText: {
        fontSize: 16,
        color: '#FFF'
    },
    appButtonTextSecondary: {
        fontSize: 14,
        color: '#000'
    },
    appButtonTextThird: {
        fontSize: 14,
        color: '#FFF'
    }
});
