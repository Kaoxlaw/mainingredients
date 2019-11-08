import React, {Component} from 'react';
import {View, Text, Image, Linking} from 'react-native';
import {Button} from 'react-native-elements';

import styles from './styles';

class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: this.props.navigation.state.params.recipes,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewImage}>
          <Image
            source={{uri: this.state.recipes.image_url}}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.text}>Name: {this.state.recipes.title}</Text>
          <Text style={styles.text}>
            Publisher: {this.state.recipes.publisher}
          </Text>
        </View>
        <View>
          <Text style={styles.text}>
            Rank: {Math.round(this.state.recipes.social_rank)}/100
          </Text>
        </View>
        <View style={styles.button}>
          <Button
            type="outline"
            title="Click here to go to the Receipe"
            onPress={() => Linking.openURL(this.state.recipes.source_url)}
          />
        </View>
        <View>
          <Text style={styles.text}>{this.state.recipes.ingredients}</Text>
        </View>
      </View>
    );
  }
}

export default Recipes;
