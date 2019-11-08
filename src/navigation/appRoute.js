import SearchRecipes from './../components/SearchRecipes';
import Recipes from './../components/Recipes';

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
};
