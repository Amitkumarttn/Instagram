import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {
  PlayIcon,
  PostIcon,
  ReelHighlightIcon,
  ReelUnHighlightIcon,
  TagIcon,
} from '../constants';
import {
  TabPostScreen,
  TabReelScreen,
  TabVideoScreen,
  TabTagScreen,
} from '../screens';

const Tab = createMaterialTopTabNavigator();

export default class MaterialTopTab extends Component {
  render() {
    return (
      <Tab.Navigator initialRouteName="Posts">
        <Tab.Screen
          name="Post"
          component={TabPostScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIndicatorStyle: {
              backgroundColor: '#fff',
              height: 1.5,
            },
            tabBarStyle: {
              backgroundColor: '#000',
            },
            tabBarIcon: ({focused}) => (
              <Image
                source={PostIcon}
                style={[styles.icons, {tintColor: focused ? '#fff' : '#888'}]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Reel"
          component={TabReelScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIndicatorStyle: {
              backgroundColor: '#fff',
              height: 1.5,
            },
            tabBarStyle: {
              backgroundColor: '#000',
            },
            tabBarIcon: ({focused}) => (
              <Image
                source={ReelUnHighlightIcon}
                style={[styles.icons, {tintColor: focused ? '#fff' : '#888'}]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Video"
          component={TabVideoScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIndicatorStyle: {
              backgroundColor: '#fff',
              height: 1.5,
            },
            tabBarStyle: {
              backgroundColor: '#000',
            },
            tabBarIcon: ({focused}) => (
              <Image
                source={PlayIcon}
                style={[styles.icons, {tintColor: focused ? '#fff' : '#888'}]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Tag"
          component={TabTagScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIndicatorStyle: {
              backgroundColor: '#fff',
              height: 1.5,
            },
            tabBarStyle: {
              backgroundColor: '#000',
            },
            tabBarIcon: ({focused}) => (
              <Image
                source={TagIcon}
                style={[styles.icons, {tintColor: focused ? '#fff' : '#888'}]}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
const styles = StyleSheet.create({
  icons: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
});
