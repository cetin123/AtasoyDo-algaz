import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import App from './App.js';
import Giris from './Giris.js';

const AppNavigator=createStackNavigator(
{

    App:{screen:App},
    Giris:{screen:Giris},
    



},
{
    initialRouteName:'App',
    headerMode:'none'
});
export default createAppContainer(AppNavigator);