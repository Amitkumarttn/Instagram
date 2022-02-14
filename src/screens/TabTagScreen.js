import React, {Component} from 'react';
import {Text, View, StyleSheet, ActivityIndicator, Image} from 'react-native';
import {IGPosts} from '../Data/Posts/index';

export default class TabTagScreen extends Component {
  state = {
    loading: true,
  };
  _onLoadEnd = () => {
    this.setState({
      loading: false,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          {IGPosts.map((item, index) => {
            return (
              <View style={styles.box} key={index}>
                <Image
                  onLoadEnd={this._onLoadEnd}
                  style={styles.tagImage}
                  source={{uri: item.postImage}}
                />
                <ActivityIndicator
                  size="small"
                  color="#fff"
                  style={styles.activityIndicator}
                  animating={this.state.loading}
                />
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  text: {
    color: '#fff',
  },
  boxContainer: {
    width: '100%',
    height: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  box: {
    width: 129,
    height: 150,
    backgroundColor: '#808080',
    marginVertical: 0.5,
  },
  tagImage: {
    width: '100%',
    height: '100%',
  },
  activityIndicator: {
    ...StyleSheet.absoluteFill,
  },
});
