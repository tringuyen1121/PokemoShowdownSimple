import React from 'react';
import pokemonData from './../pokemon.json';
import { View, Text, Picker, StyleSheet } from 'react-native';

class PokePicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = { selectedItem: '' };
    }

    onHandleValueChange = (itemValue, itemIndex) => {
        this.setState({ selectedItem: itemValue });
        this.props.onSelectItem(itemIndex);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 25, textAlign: 'center' }}>Please Pick Your Pokemon</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={this.state.selectedItem}
                    onValueChange={(item, index) => this.onHandleValueChange(item, index)}
                >
                    <Picker.Item key='guideText' label='Please choose a pokemon ...' />
                    {pokemonData.map((pokemon) => (
                        <Picker.Item key={pokemon.id} label={pokemon.name} value={pokemon.name} />
                    ))}
                </Picker>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'column',
        alignItems: 'center'
    },
    picker: {
        width: '80%'
    }
});

export default PokePicker;