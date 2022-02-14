import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {CameraScreen, MessageScreen, HomeScreen, IGHome} from '../screens';
import {PostIcon, ReelUnHighlightIcon} from '../constants';

const Tab = createMaterialTopTabNavigator();

const InstagramHomeTopTab = () => {
  return (
    <Tab.Navigator initialRouteName="IGHome">
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIndicatorStyle: {
            backgroundColor: 'transparent',
          },
          tabBarStyle: {
            backgroundColor: '#000',
          },
        }}
      />
      <Tab.Screen
        name="IGHome"
        component={IGHome}
        options={{
          tabBarShowLabel: false,
          tabBarIndicatorStyle: {
            backgroundColor: 'transparent',
          },
          tabBarStyle: {
            backgroundColor: '#000',
          },
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIndicatorStyle: {
            backgroundColor: 'transparent',
          },
          tabBarStyle: {
            backgroundColor: '#000',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default InstagramHomeTopTab;
