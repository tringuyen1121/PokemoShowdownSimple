import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from './../constants/colors';

const MoveListItem = (props) => {
    const { name, type, power } = props;

    const formattedName = name.split('-')
        .map((word) => {
            return `${word.charAt(0).toUpperCase()}${word.slice(1)}` ;
        })
        .join(' ');

    return (
        <TouchableOpacity style={[ styles.item, { backgroundColor: colors[type] } ]}>
            <Text style={styles.name}>{formattedName}</Text>
            <Text>{type}</Text>
            <Text>{power}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        margin: 5,
        padding: 5,
        borderWidth: 1,
        borderRadius: 3
    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default MoveListItem;