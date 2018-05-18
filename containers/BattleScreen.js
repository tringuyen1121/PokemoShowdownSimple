import React from 'react';
import pokemonData from './../pokemon.json';
import fetchGetJson from './../util/fetchGetJson';
import { pokeApiUrl } from './../constants/config';
import { View, Text, StyleSheet } from 'react-native';
import BattlingPokeInfo from './../components/BattlingPokeInfo';

class BattleScreen extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            opponent: null,
            opponentPicked: false
        }
    }

    componentDidMount() {
        this.pickOpponent();
    }

    pickOpponent = () => {
        const random = Math.floor(Math.random() * 6);
        const opponent = pokemonData[random];

        this.fetchMoves(opponent.moves)
            .then(moves => {

                opponent.detailedMoves = moves.map(move => {
                    const { power, name } = move;
                    const type = move.type.name;
                    return { name, type, power };
                });

                this.setState({
                    opponent: opponent,
                    opponentPicked: true
                });
            })
            .catch(err => console.log(err));
    }

    fetchMoves = (moveList) => {
        this.setState({ isLoading: true });

        const promises = moveList.map(moveId => fetchGetJson(`${pokeApiUrl}/move/${moveId}`));
        return Promise.all(promises);
    }

    render() {
        const { selectedPokemon } = this.props.navigation.state.params;
        const { opponent } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.selected}>
                    <BattlingPokeInfo pokemon={selectedPokemon} />
                </View>
                <View style={styles.opponent}>
                    {
                        this.state.opponentPicked ?  (
                            <BattlingPokeInfo pokemon={opponent} />
                        ) : (
                            <Text style={{fontSize:18}}>Choosing opponent...</Text>
                        )
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    
})

export default BattleScreen;