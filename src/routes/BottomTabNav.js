import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  SearchScreen,
  ReelScreen,
  NotificationScreen,
  ProfileScreen,
  LoginScreen,
  SignupScreen,
  EditProfileScreen,
  StoryScreen,
  SplashScreen,
  PeopleProfile,
  CameraScreen,
  IGHome,
  MessageScreen,
} from '../screens';
import {
  HomeHighlightIcon,
  HomeUnHighlightIcon,
  SearchHighlightIcon,
  SearchUnHighlightIcon,
  ReelHighlightIcon,
  ReelUnHighlightIcon,
  NotificationHighlightIcon,
  NotificationUnHighlightIcon,
  ProfileIcon,
  InstagramLogo,
  AddHighlightIcon,
  AddUnHighlightIcon,
  MessageIcon,
  MenuIcon,
  HamburgerIcon,
  LockIcon,
} from '../constants';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
function BottomTab() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          headerTitle: '',
          headerShown: false,
          headerBackgroundContainerStyle: {
            backgroundColor: '#000',
          },
          
          tabBarStyle: {
            backgroundColor: '#000',
          },
          tabBarIcon: ({focused}) => (
            <Image
              style={[styles.homeIcons, {tintColor: focused ? '#fff' : '#888'}]}
              source={HomeHighlightIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          headerBackgroundContainerStyle: {
            backgroundColor: '#000',
          },
          tabBarStyle: {
            backgroundColor: '#000',
          },
          tabBarIcon: ({focused}) => (
            <Image
              style={[styles.icons, {tintColor: focused ? '#fff' : '#888'}]}
              source={SearchHighlightIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Reel"
        component={ReelScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          headerBackgroundContainerStyle: {
            backgroundColor: '#000',
          },
          tabBarStyle: {
            backgroundColor: '#000',
          },
          tabBarIcon: ({focused}) => (
            <Image
              style={[styles.icons, {tintColor: focused ? '#fff' : '#888'}]}
              source={ReelHighlightIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarShowLabel: false,
          headerTitle: 'Activity',
          headerBackgroundContainerStyle: {
            backgroundColor: '#000',
          },
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'Left',
          headerStyle: {
            backgroundColor: '#000',
          },
          tabBarStyle: {
            backgroundColor: '#000',
          },
          tabBarIcon: ({focused}) => (
            <Image
              style={[styles.icons, {tintColor: focused ? '#fff' : '#888'}]}
              source={NotificationHighlightIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#000',
          },
          tabBarIcon: ({focused}) => (
            <Image
              style={[styles.avatarIcons, {borderWidth: focused ? 2 : 0}]}
              source={ProfileIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();
export default class BottomTabNav extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Tab"
            component={BottomTab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Edit"
            component={EditProfileScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Story"
            component={StoryScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PeopleProfile"
            component={PeopleProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Camera"
            component={CameraScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="IGHome"
            component={IGHome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Message"
            component={MessageScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  icons: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  homeIcons: {
    width: 40,
    height: 40,
    tintColor: '#fff',
  },
  lockIcons: {
    width: 20,
    height: 20,
    tintColor: '#fff',
    marginRight: -12,
  },
  Plusicons: {
    width: 50,
    height: 50,
    tintColor: '#fff',
    marginRight: 12,
  },
  avatarIcons: {
    width: 30,
    height: 30,
    borderColor: '#fff',
    borderRadius: 50,
  },
  logo: {
    height: 40,
    width: 120,
    tintColor: '#fff',
    marginLeft: 20,
    // backgroundColor: 'red',
  },
  IconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 15,
  },
  msgIcons: {
    width: 55,
    height: 55,
    tintColor: '#fff',
    marginHorizontal: -15,
  },
});
