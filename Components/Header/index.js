import React from 'react';
import { View, Text, Image, } from 'react-native';
import styles from './styles';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../Assets/logo.png')} />
            <Image style={styles.menu} source={require('../../Assets/menu.png')} />
        </View>
    )
};

export default Header;