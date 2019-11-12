import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const key = '0692f2255a042a88e8e9ed44e3faab95';
let url = `https://www.food2fork.com/api/get?key=${key}&rId=35382`;

class GetRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: [],
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const res = await fetch(url, {
        method: 'GET',
      });
      const data = await res.json();

      this.setState({data, isloading: false});
      console.log({data});
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const {data} = this.state;
    // console.log({recipe});
    return (
      <View style={styles.container}>
        {/* <View style={styles.viewImage}>
          <Image source={this.state.recipes.title} />
        </View> */}
        <View>
          <Text style={styles.text}>
            Title:
            {JSON.stringify(data.map)}
          </Text>
          <Text style={styles.text}>Publisher: {this.state.publisher}</Text>
        </View>
        {/* <View>
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
        </View> */}
      </View>
    );
  }
}

export default GetRecipes;
