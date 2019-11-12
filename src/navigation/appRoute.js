import SearchRecipes from './../components/SearchRecipes';
import Recipes from './../components/Recipes';
import GetRecipes from './../components/GetRecipes';

export default {
  SearchRecipes: {
    screen: SearchRecipes,
    navigationOptions: {
      header: null,
    },
  },
  Recipes: {
    screen: Recipes,
    navigationOptions: {
      title: 'Recipes',
      headerStyle: {
        backgroundColor: '#1b3d63',
      },
      headerTintColor: '#fff',
    },
  },
  GetRecipes: {
    screen: GetRecipes,
    navigationOptions: {
      title: 'GetRecipes',
      headerStyle: {
        backgroundColor: '#1b3d63',
      },
      headerTintColor: '#fff',
    },
  },
};
