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

  makeRemoteRequest = () => {
    const key = '7c2affbc9f6376ff2811659a1acd4f59';
    const url = 'https://www.food2fork.com/api/search?key=' + key;
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

  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

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

  renderHeader = () => {
    return (
      <View>
        <Text style={styles.title}>What recipes are you looking for?</Text>
        <SearchBar
          placeholder="Search..."
          lightTheme
          round
          onChangeText={text => this.searchFilterFunction(text)}
          autoCorrect={false}
          value={this.state.value}
          containerStyle={{
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            borderBottomWidth: 0,
            marginBottom: 10,
            marginTop: 20,
          }}
        />
      </View>
    );
  };

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
