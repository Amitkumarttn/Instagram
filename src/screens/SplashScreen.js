import React, {Component} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {InstagramIcon, MetaLogo} from '../constants';
import AsyncStorageData from '@react-native-async-storage/async-storage';

export default class SplashScreen extends Component {
  state = {
    data: null,
  };
  async componentDidMount() {
    const user = await AsyncStorageData.getItem('UserValue');
    const users = JSON.parse(user);
    this.setState({
      data: users,
    });
    // console.log('USERS', users);
    // console.log('User Data===', this.state.data);
    this.state.data === null
      ? this.props.navigation.navigate('Login')
      : this.props.navigation.navigate('Tab');
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.icon} source={InstagramIcon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>from</Text>
          <Image style={styles.metaIcon} source={MetaLogo} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  logoContainer: {
    marginTop: 300,
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 60,
  },
  text: {
    color: '#888',
    fontSize: 16,
  },
  textContainer: {
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
  },
  metaIcon: {
    width: '300%',
    height: 40,
    alignSelf: 'center',
  },
});
