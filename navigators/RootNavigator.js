import { createStackNavigator } from 'react-navigation';
import HomeScreen from './../containers/HomeScreen';
import BattleScreen from './../containers/BattleScreen';

const RootNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Battle: {
        screen: BattleScreen,
        navigationOptions: {
            headerTitle: 'Battle'
        }
    }
}, {
    initalRouteName: 'Home',
    navigationOptions: {
        headerTitle: 'Pokemon Showndown Simple'
    }
});

export default RootNavigator;