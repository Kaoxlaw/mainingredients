import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import appRoute from './appRoute';
import SearchRecipes from './../components/SearchRecipes';

const App = createStackNavigator(appRoute);

let RootNavigation = createSwitchNavigator(
  {
    SearchRecipes,
    App,
  },
  {initialRouteName: 'SearchRecipes'},
);

RootNavigation = createAppContainer(RootNavigation);

export default RootNavigation;
