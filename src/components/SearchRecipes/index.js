import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {SearchBar, ListItem} from 'react-native-elements';

import styles from './styles';

class SearchRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  //Récupère les recettes de l'API food2fork
  makeRemoteRequest = () => {
    const key = 'd07d9142983c7fb51dfebb98c2e8ff1a';
    const url = `https://www.food2fork.com/api/search?key=${key}`;

    this.setState({loading: true});

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.recipes,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res.recipes;
      })
      .catch(error => {
        this.setState({error, loading: false});
      });
  };

  //Separateur entre les recettes
  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  //Filtre pour la recherche dans la barre de recherche
  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.title.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  //Header qui correspond au titre et à la barre de recherche
  renderHeader = () => {
    return (
      <View style={styles.bar}>
        <Text style={styles.title}>Which recipes are you looking for?</Text>
        <SearchBar
          placeholder="Search..."
          lightTheme
          round
          onChangeText={text => this.searchFilterFunction(text)}
          autoCorrect={false}
          value={this.state.value}
          containerStyle={styles.searchBarContainerStyle}
        />
      </View>
    );
  };

  //les recettes
  selectedRecipes = recipes => {
    this.props.navigation.navigate('Recipes', {recipes});
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList
          stickyHeaderIndices={[0]}
          data={this.state.data}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                this.selectedRecipes(item);
              }}>
              <ListItem
                leftAvatar={{source: {uri: item.image_url}}}
                title={item.title}
                subtitle={item.publisher}
                rightElement={
                  '  rank\n' + (Math.round(item.social_rank) + '/100')
                }
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.title}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

export default SearchRecipes;
