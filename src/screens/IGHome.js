import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Story from '../components/Story';
import {
  PlusIcon,
  MessageIcon,
  InstagramLogo,
  AddUnHighlightIcon,
} from '../constants';
import {data} from '../Data/Video/Data';
import {Color} from '../styles';
import UserPost from '../components/UserPost';
import {useNavigation} from '@react-navigation/core';
import {userPosts} from '../Data/UserPost';

const StoryComp = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.storyContainer}>
      <Story
        name="Your Story"
        img={
          'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        }
      />
      {data.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate('Story', {
                item,
              })
            }>
            <Story name={item.name} img={item.profilepic} />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
const InstagramHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.InstagramHeaderContainer}>
      <Image style={styles.instagramLogo} source={InstagramLogo} />
      <View style={styles.iconContainer}>
        <Image style={styles.icons} source={AddUnHighlightIcon} />
        <Image style={styles.icons} source={MessageIcon} />
      </View>
    </View>
  );
};
const IGHome = () => {
  return (
    <View style={styles.container}>
      <InstagramHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StoryComp />
        {userPosts.map((title, index) => {
          return (
            <View key={index}>
              <UserPost
                avatarDp={title.avatar}
                userName={title.name}
                userPost={title.postImage}
                likes={title.like}
                caption={title.caption}
                comment={title.comment}
                time={title.time}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default IGHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  InstagramHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {flexDirection: 'row'},
  icons: {
    width: 50,
    height: 50,
    tintColor: '#fff',
  },
  instagramLogo: {
    tintColor: '#fff',
    width: 135,
    height: 50,
    marginLeft: 10,
  },
});
