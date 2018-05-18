import React from 'react';
import MoveList from './MoveList';
import { Image, View, StyleSheet } from 'react-native';
import { spriteUrl } from './../constants/config';

const BattlingPokeInfo = (props) => {
    const { pokemon } = props;

    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Image
                    style={styles.image}
                    resizeMode='contain'
                    source={{ uri: `${spriteUrl}/${pokemon.id}.png` }} />
            </View>
            <View>
                <MoveList
                    style={ styles.moves } 
                    moves={ pokemon.detailedMoves }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: 150,
        margin: 15
    },
    moves: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
})

export default BattlingPokeInfo;