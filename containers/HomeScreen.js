import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PokePicker from './../components/PokePicker';
import PokeInfo from './../components/PokeInfo';
import fetchGetJson from './../util/fetchGetJson';
import { pokeApiUrl } from './../constants/config';
import pokemonData from './../pokemon.json';

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedPokemon: null,
            opponentPokemon: null,
            isLoading: false
        };
    }

    handlePokemonSelection = (index) => {
        const selectedPokemon = pokemonData[index - 1];

        this.fetchMoves(selectedPokemon.moves)
            .then(moves => {

                selectedPokemon.detailedMoves = moves.map(move => {
                    const { power, name } = move;
                    const type = move.type.name;
                    return { name, type, power };
                });

                this.setState({
                    selectedPokemon: selectedPokemon,
                    isLoading: false
                });
            })
            .catch(err => console.log(err));
    }

    handleNavigation = (routeName, params) => {
        const { navigation } = this.props;
        navigation.navigate(routeName, params);
    }

    fetchMoves = (moveList) => {
        this.setState({ isLoading: true });

        const promises = moveList.map(moveId => fetchGetJson(`${pokeApiUrl}/move/${moveId}`));
        return Promise.all(promises);
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <PokePicker onSelectItem={this.handlePokemonSelection} />
                </View>
                <View>
                    {this.state.selectedPokemon && <PokeInfo pokemon={this.state.selectedPokemon} />}
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            this.handleNavigation(
                                'Battle',
                                {
                                    selectedPokemon: this.state.selectedPokemon,
                                    opponentPokemon: this.state.opponentPokemon
                                })
                        }
                        }
                    >
                        <Text style={styles.buttonText}>Go to battle!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    button: {
        margin: 40,
        paddingVertical: 15,
        backgroundColor: '#42a5f5',
        elevation: 3
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 17,
        color: '#ffffff'
    }
})

export default HomeScreen;