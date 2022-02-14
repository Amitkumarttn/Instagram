import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {
  CameraIcon,
  DownIcon,
  LeftIcon,
  PlusIcon,
  SearchHighlightIcon,
  VideoChat,
} from '../constants';
import Colors from '../styles/Colors';
import {useNavigation} from '@react-navigation/core';
import {userMessage} from '../Data/UserMessage/index';

const {width, height} = Dimensions.get('window');
const HeaderComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.sectionOne}>
          <TouchableOpacity onPress={() => navigation.navigate('IGHome')}>
            <Image style={[styles.icon, {marginRight: 22}]} source={LeftIcon} />
          </TouchableOpacity>
          <Text style={styles.headerName}>amitkumar</Text>
          <Image style={styles.downIcon} source={DownIcon} />
          <View style={styles.redDot} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.icon} source={VideoChat} />
          <Image
            style={[styles.icon, {marginHorizontal: 12}]}
            source={PlusIcon}
          />
        </View>
      </View>
    </View>
  );
};
const SearchComponent = () => {
  return (
    <View>
      <View style={styles.searchContainer}>
        <Image style={styles.searchIcon} source={SearchHighlightIcon} />
        <TextInput
          style={styles.searchTextInput}
          placeholder="Search"
          placeholderTextColor="#888"
          clearButtonMode="always"
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Messages</Text>
      </View>
    </View>
  );
};
const Item = ({avatar, name, message, time}) => (
  <View style={styles.Fitem}>
    <View style={{flexDirection: 'row'}}>
      <Image style={styles.avatar} source={{uri: avatar}} />
      <View style={{marginLeft: 12}}>
        <Text style={styles.avatarName}>{name}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.avatarMessage}>{message}</Text>
          <View style={styles.timeDot} />
          <Text style={styles.avatarMessage}>{time}</Text>
        </View>
      </View>
    </View>
    <View>
      <Image style={styles.icon} source={CameraIcon} />
    </View>
  </View>
);
const MessageScreen = () => {
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = () => {
    // dispatch(getAllTopicAction(userParamData));
    setIsFetching(false);
  };

  const onRefresh = () => {
    setIsFetching(true);
    <ActivityIndicator />
    fetchData();
  };

  const renderItem = ({item}) => (
    <Item
      avatar={item.avatar}
      name={item.name}
      message={item.message}
      time={item.time}
    />
  );
  return (
    <View style={styles.container}>
      <HeaderComponent />

      <FlatList
        ListHeaderComponent={<SearchComponent />}
        data={userMessage}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        // scrollEnabled={false}
        // nestedScrollEnabled
        onRefresh={onRefresh}
        refreshing={isFetching}
        progressViewOffset={5000}
        // ListEmptyComponent={<Empty message="No data found." />}
      />
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'center',
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
    position: 'absolute',
    marginHorizontal: 18,
    marginVertical: 18,
    zIndex: 2,
  },
  searchTextInput: {
    backgroundColor: '#363636',
    width: width - 20,
    height: 33,
    borderRadius: 9,
    paddingLeft: 40,
    color: '#fff',
    fontSize: 16,
  },
  item: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 1,
  },
  headerContainer: {
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  headerName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  redDot: {
    width: 8,
    height: 8,
    backgroundColor: 'red',
    borderRadius: 50,
  },
  downIcon: {
    width: 15,
    height: 15,
    tintColor: '#fff',
    marginHorizontal: 6,
  },
  sectionOne: {flexDirection: 'row', alignItems: 'center'},
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  titleContainer: {
    marginHorizontal: 12,
    marginVertical: 10,
  },
  Fitem: {
    // backgroundColor: '#f9c2ff',
    padding: 20,
    padding: 10,
    marginVertical: 8,
    // marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Ftitle: {
    fontSize: 32,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  avatarName: {
    color: '#fff',
    fontSize: 17,
  },
  avatarMessage: {
    color: '#888',
    fontSize: 15,
  },
  timeDot: {
    width: 2,
    height: 2,
    backgroundColor: '#888',
    borderRadius: 50,
    marginHorizontal: 4,
  },
});
