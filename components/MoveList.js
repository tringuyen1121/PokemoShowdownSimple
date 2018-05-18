import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MoveListItem from './MoveListItem';

const MoveList = (props) => {
    const { moves } = props;
    const moveItems = moves.map( (move) => {
        return <MoveListItem {...move} key={move.name} />
    });

    return (
        <View style={ props.style }>
            {moveItems}
        </View>       
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default MoveList;