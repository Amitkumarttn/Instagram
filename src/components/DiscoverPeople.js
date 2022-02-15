import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Color} from '../styles';
import {PlusIcon} from '../constants';

export default class DiscoverPeople extends Component {
  state = {
    follow: false,
    loading: true,
  };
  _onLoadEnd = () => {
    this.setState({
      loading: false,
    });
  };
  pressHandle = () => {
    this.setState({follow: !this.state.follow});
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.boxContainer,
            {width: this.props.width, height: this.props.height},
          ]}>
          <TouchableOpacity style={styles.closeIconContainer}>
            <Image source={PlusIcon} style={[styles.closeIcon, {marginLeft: this.props.marginLeft}]} />
          </TouchableOpacity>
          <Image
            onLoadEnd={this._onLoadEnd}
            style={[
              styles.img,
              {width: this.props.avatarWidth, height: this.props.avatarHeight},
            ]}
            source={{uri: this.props.userProfilePic}}
          />
          <ActivityIndicator
            size="small"
            color="#fff"
            style={styles.activityIndicator}
            animating={this.state.loading}
          />
          <Text style={styles.name}>{this.props.userName}</Text>
          <Text style={styles.desc}>{this.props.peoples} </Text>
          <TouchableOpacity
            onPress={() => this.pressHandle()}
            style={[
              styles.followContainer,
              {
                backgroundColor: this.state.follow
                  ? '#000'
                  : Color.primaryColor,
                borderColor: this.state.follow ? '#fff' : null,
              },
            ]}>
            {this.state.follow ? (
              <Text style={styles.txt}>Requested</Text>
            ) : (
              <Text style={styles.txt}>Follow</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
  boxContainer: {
    // width: 150,
    // height: 180,
    borderRadius: 5,
    borderColor: '#888',
    borderWidth: 1,
    alignItems: 'center',
    marginLeft: 8,
    marginBottom: 10,
    // marginTop: -70,
  },
  img: {
    // width: 80,
    // height: 80,
    marginTop: 10,
    borderRadius: 80,
  },
  name: {
    color: '#fff',
    marginTop: 5,
    fontWeight: '600',
  },
  desc: {
    color: '#fff',
    marginTop: 2,
    fontSize: 11,
    marginBottom: 8,
    width: 120,
    textAlign: 'center',
  },
  followContainer: {
    width: '90%',
    height: 23,
    borderRadius: 4,
    position: 'absolute',
    bottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  txt: {
    color: '#fff',
  },
  closeIcon: {
    transform: [{rotate: '45deg'}],
    tintColor: '#888',
    width: 20,
    height: 20,
    position: 'absolute',
    // marginLeft: 47,
    marginTop: 5,
  },
  closeIconContainer: {},
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 50,
  },
});
