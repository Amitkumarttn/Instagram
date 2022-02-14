import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import {
  MenuIcon,
  NotificationUnHighlightIcon,
  CommentIcon,
  SendIcon,
  SavedIcon,
  heartIcon,
  AddHighlightIcon,
  AddUnHighlightIcon,
  NotificationHighlightIcon,
} from '../constants';
import DoubleClick from 'react-native-double-tap';
import {userPosts} from '../Data/UserPost';

const UserAddComment = () => {
  const [value, setValue] = useState('');
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={[styles.avatar, {marginHorizontal: 5, marginRight: 12}]}
          source={{
            uri: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          }}
        />
        <TextInput
          value={value}
          placeholder="Add a comment"
          placeholderTextColor="#888"
          onChangeText={text => setValue(text)}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text>❤️</Text>
        <Text>✌️</Text>
        <Image style={styles.addIcon} source={AddUnHighlightIcon} />
      </View>
    </View>
  );
};

const UserPost = props => {
  const [hide, setHide] = useState(true);
  // const [pressCount, setPressCount] = useState(0);
  useEffect(() => {
    this.pressCount = 0;
  })
  const handleLikePress = () => {
    setHide(!hide);
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Image
            style={styles.avatar}
            source={{
              uri: props.avatarDp,
            }}
          />
          <Text style={styles.text}>{props.userName}</Text>
          <Image style={styles.icon} source={MenuIcon} />
        </View>
        <TouchableWithoutFeedback
          style={{
            position: 'absolute',
            left: 0,
            padding: 20,
            backgroundColor: 'green',
          }}
          onPress={() => {
            this.pressCount++;
            if (this.pressCount == 2) {
              clearTimeout(backTimer);
              setHide(!true);
            } else {
              backTimer = setTimeout(() => {
                this.pressCount = 0;
              }, 1000);
            }
          }}>
          <Image
            style={styles.postContainer}
            source={{
              uri: props.userPost,
            }}
          />
        </TouchableWithoutFeedback>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginVertical: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            {hide ? (
              <TouchableOpacity onPress={() => handleLikePress()}>
                <Image
                  style={styles.icon}
                  source={NotificationUnHighlightIcon}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => handleLikePress()}>
                <Image
                  style={[styles.icon, {tintColor: 'red'}]}
                  source={NotificationHighlightIcon}
                />
              </TouchableOpacity>
            )}
            <Image
              style={[styles.icon, {marginHorizontal: 10}]}
              source={CommentIcon}
            />
            <Image style={styles.icon} source={SendIcon} />
          </View>
          <Image style={styles.icon} source={SavedIcon} />
        </View>
        <View style={{marginHorizontal: 8}}>
          <Text style={styles.txt}>{props.likes} likes</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.txt}>{props.userName}</Text>
            <Text style={styles.txt}>{props.caption}</Text>
          </View>
          <Text style={styles.comment}>View all {props.comment} comments</Text>
          <UserAddComment />
          <Text style={styles.time}>{props.time} hours ago</Text>
        </View>
      </View>
    </View>
  );
};

export default UserPost;

// import {Image, StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
// import React from 'react';
// import Header from './Header';
// import {
//   MenuIcon,
//   NotificationUnHighlightIcon,
//   CommentIcon,
//   SendIcon,
//   SavedIcon,
// } from '../constants';
// import {userPosts} from '../Data/UserPost';
// const Item = ({title}) => {
//   return (
// <View style={styles.container}>
//   <View style={styles.headerContainer}>
//     <Image
//       style={styles.avatar}
//       source={{
//         uri: `${title.avatar}`,
//       }}
//     />
//     <Text style={styles.text}>{title.name}</Text>
//     <Image style={styles.icon} source={MenuIcon} />
//   </View>
//   <View>
//     <Image
//       style={styles.postContainer}
//       source={{uri: `${title.postImage}`}}
//     />
//   </View>
//   <View
//     style={{
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       marginHorizontal: 10,
//       marginVertical: 10,
//     }}>
//     <View style={{flexDirection: 'row'}}>
//       <Image style={styles.icon} source={NotificationUnHighlightIcon} />
//       <Image style={[styles.icon, {marginHorizontal: 10}]} source={CommentIcon} />
//       <Image style={styles.icon} source={SendIcon} />
//     </View>
//     <Image style={styles.icon} source={SavedIcon} />
//   </View>
//   <View style={{marginHorizontal: 8}}>
//     <Text style={styles.txt}>{title.like} likes</Text>
//     <View style={{flexDirection: 'row'}}>
//       <Text style={styles.txt}>{title.name}</Text>
//       <Text style={styles.txt}>{title.caption}</Text>
//     </View>
//     <Text style={styles.comment}>View all {title.comment} comments</Text>
//     <Text style={styles.time}>{title.time} hours ago</Text>
//   </View>
// </View>
//   );
// };
// const UserPost = () => {
//   const renderItem = ({item}) => <Item title={item} />;
//   return (
//     <FlatList
//     scrollEnabled={false}
//       data={userPosts}
//       renderItem={renderItem}
//       keyExtractor={(item, index) => index.toString()}
//     />
//   );
// };

// export default UserPost;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    // flex: 1
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
  text: {color: '#fff', marginLeft: -200, fontWeight: 'bold', fontSize: 16},
  item: {
    backgroundColor: '#f9c2ff',
    // padding: 10,
    marginVertical: 8,
    // marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  postContainer: {
    height: 400,
    width: '100%',
    backgroundColor: '#888',
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: '#fff',
  },
  txt: {
    color: '#fff',
    fontWeight: 'bold',
  },
  comment: {
    color: '#888',
  },
  time: {
    color: '#888',
    fontSize: 10,
  },
  addIcon: {
    width: 35,
    height: 35,
    tintColor: '#fff',
  },
});
