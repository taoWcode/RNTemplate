import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import RootStack from './MainTabNavigator';

export default createAppContainer(createSwitchNavigator({
    Main:RootStack
}));