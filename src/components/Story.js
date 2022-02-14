import React, {Component} from 'react';
import {Image, Text, View, StyleSheet, ActivityIndicator, ScrollView} from 'react-native';

export default class Story extends Component {
  state = {
    loading: true,
  };
  render() {
    return (
      <View style={styles.circle}>
        <Image
          style={styles.avatar}
          source={{uri: this.props.img}}
          onLoadEnd={this._onLoadEnd}
        />
        <ActivityIndicator
          size="small"
          color="#888"
          style={styles.activityIndicator}
          animating={this.state.loading}
        />
        <Text style={styles.name}>{this.props.name}</Text>
      </View>
    );
  }
  _onLoadEnd = () => {
    this.setState({
      loading: false,
    });
  };
}
const styles = StyleSheet.create({
  circle: {
    width: 65,
    height: 65,
    borderRadius: 50,
    borderColor: 'red',
    borderWidth: 2,
    marginHorizontal: 10,
    marginBottom: 30,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  name: {
    color: '#fff',
    width: 100,
    marginTop: 8,
    alignSelf: 'center',
    textAlign: 'center',
  },
  activityIndicator: {
    ...StyleSheet.absoluteFill
  }
});
