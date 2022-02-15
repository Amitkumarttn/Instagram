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
  AllCaughtUpIcon,
  MenuIcon,
} from '../constants';
import {data} from '../Data/Video/Data';
import {Color} from '../styles';
import UserPost from '../components/UserPost';
import {useNavigation} from '@react-navigation/core';
import {userPosts} from '../Data/UserPost';
import DiscoverPeople from '../components/DiscoverPeople';
import SponserComp from '../components/SponsorComp';
// import {data} from '../Data/Video/Data';

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

const AllCaughtUp = () => {
  return (
    <View>
      <Image style={{width: '100%', height: 250}} source={AllCaughtUpIcon} />
      {/* <Text>You're All Caught Up</Text>
      <Text>You've seen all new posts from the past 3 days.</Text>
      <Text>View Older Posts</Text> */}
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
              {index === 3 ? (
                <View style={{backgroundColor: '#121212', marginTop: 12}}>
                  <View style={styles.headingContainer}>
                    <Text style={styles.newText}> Suggested for You </Text>
                    <Text style={styles.link}>See All</Text>
                  </View>
                  <ScrollView horizontal>
                    {data.map((item, index) => {
                      return (
                        <View>
                          <DiscoverPeople
                            userProfilePic={item.profilepic}
                            userName={item.name}
                            peoples={item.follow}
                            height={250}
                            width={220}
                            avatarWidth={150}
                            avatarHeight={150}
                            marginLeft={80}
                          />
                        </View>
                      );
                    })}
                  </ScrollView>
                </View>
              ) : index === 11 ? (
                <AllCaughtUp />
              ) : index === 5 ? (
                <View>
                  <View style={styles.headerContainer}>
                    <Image
                      style={styles.avatar}
                      source={{
                        uri: title.avatar,
                      }}
                    />
                    <View>
                      <Text style={styles.text}>greygoose</Text>
                      <Text style={styles.sponsor}>Sponsored</Text>
                    </View>
                    <Image style={styles.icon} source={MenuIcon} />
                  </View>
                  <SponserComp />
                </View>
              ) : (
                <UserPost
                  avatarDp={title.avatar}
                  userName={title.name}
                  userPost={title.postImage}
                  likes={title.like}
                  caption={title.caption}
                  comment={title.comment}
                  time={title.time}
                />
              )}
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
  headingContainer: {
    flexDirection: 'row',
    height: 30,
    justifyContent: 'space-between',
    marginHorizontal: 8,
    marginTop: 20,
  },
  newText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  link: {
    color: Color.primaryColor,
    fontSize: 14,
    fontWeight: '600',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
    paddingVertical: 10,
  },
  avatar: {width: 30, height: 30, borderRadius: 50},
  icon: {width: 25, height: 25, borderRadius: 50, tintColor: '#fff'},
  text: {color: '#fff', marginLeft: -140, fontWeight: 'bold', fontSize: 16},
  sponsor: {color: '#fff', fontSize: 13, marginLeft: -140,}
});
