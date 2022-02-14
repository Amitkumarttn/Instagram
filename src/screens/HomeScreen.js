import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import Story from '../components/Story';
import {PlusIcon} from '../constants';
import {data} from '../Data/Video/Data';
import {Color} from '../styles';
import UserPost from '../components/UserPost';
import {useNavigation} from '@react-navigation/core';
import InstagramHomeTopTab from '../components/InstagramHomeTopTab';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
    <StatusBar barStyle='light-content' />
      <InstagramHomeTopTab />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: -50
  },
});
