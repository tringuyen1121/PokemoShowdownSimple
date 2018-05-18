import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MoveList from './MoveList';
import { spriteUrl } from './../constants/config';
import colors from './../constants/colors';

const PokeInfo = (props) => {
    const { pokemon } = props;
    return (
        <View style={styles.container}>
            <View style={styles.avatarAndStats}>
                <View style={styles.avatar}>
                    <Image 
                        style={styles.image} 
                        resizeMode='contain' 
                        source={{ uri: `${spriteUrl}/${pokemon.id}.png` }}
                    />
                    <View style={styles.types}>
                        {pokemon.types.map( (type) => 
                            (<Text 
                                key={type} 
                                style={[ styles.typeText, {backgroundColor: colors[type]} ]}> 
                                {type} 
                            </Text>)
                        )}
                    </View>
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoText}>{`HP: ${pokemon.hp}`}</Text>
                    <Text style={styles.infoText}>{`Attack: ${pokemon.attack}`}</Text>
                    <Text style={styles.infoText}>{`Defense: ${pokemon.defense}`}</Text>
                    <Text style={styles.infoText}>{`Speed: ${pokemon.speed}`}</Text>
                </View>
            </View>
            <View style={styles.moveInfo}>
                <MoveList 
                    moves={ pokemon.detailedMoves } 
                    style={ styles.moves } 
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    avatarAndStats: {
        width: '100%',
        paddingHorizontal: 40,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },
    avatar: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    types: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    image: {
        height: 150,
        width: 150,
        marginBottom: 15
    },
    typeText: {
        fontSize: 17,
        borderColor: '#000',
        borderWidth: 1,
        padding: 5,
        marginHorizontal: 2
    },
    infoText: {
        marginBottom: 10,
        marginLeft: 40,
        fontSize: 15
    },
    moves: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

export default PokeInfo;