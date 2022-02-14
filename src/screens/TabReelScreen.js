import React, {Component} from 'react';
import {Text, View, StyleSheet, ActivityIndicator, Image} from 'react-native';
import {IGPosts} from '../Data/Posts/index';
import {PlayIcon} from '../constants';

export default class TabReelScreen extends Component {
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
                  style={styles.reelImage}
                  source={{uri: item.postImage}}
                />
                <ActivityIndicator
                  size="small"
                  color="#fff"
                  style={styles.activityIndicator}
                  animating={this.state.loading}
                />
                <View style={styles.actionContainer}>
                  <Image source={PlayIcon} style={styles.icon} />
                  <Text style={styles.text}>{item.views}</Text>
                </View>
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
    fontSize: 13,
    fontWeight: 'bold',
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
    height: 200,
    backgroundColor: '#808080',
    marginVertical: 0.5,
  },
  reelImage: {
    width: '100%',
    height: '100%',
    opacity: 0.9,
  },
  icon: {
    width: 15,
    height: 15,
    tintColor: '#fff',
    marginRight: 5,
  },
  actionContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    padding: 8,
  },
  activityIndicator: {
    ...StyleSheet.absoluteFill,
  },
});
