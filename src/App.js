/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import SearchRecipes from './components/SearchRecipes';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchRecipes />
      </View>
    );
  }
}

export default App;
