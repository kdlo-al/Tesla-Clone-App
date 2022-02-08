import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton/index';
import Header from '../Header/index';

const CarItem = (props) => {

    const { name, tagLine, tagLineCta, image, } = props;

    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.image} />

            <Header />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagLine}
                    {' '}
                    <Text style={styles.subtitleCta}>{tagLineCta}</Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <StyledButton type={'primary'} content={'Custom Order'} onPress={() => { console.warn('Custom Order was pressed') }} />

                <StyledButton type={'secondary'} content={'Existing Inventrory'} onPress={() => { console.warn('Existing Inventroy was pressed') }} />
            </View>
        </View>
    )
}

export default CarItem;
