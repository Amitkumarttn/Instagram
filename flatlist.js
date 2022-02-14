import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Alert,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import Video from 'react-native-video';
import {
  CameraIcon,
  NotificationUnHighlightIcon,
  DislikeIcon,
  CommentIcon,
  MessageIcon,
  MenuIcon,
  ProfileIcon,
  heartIcon,
} from '../constants';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {data} from '../Data/Video/VideoData';
const {width, height} = Dimensions.get('window');

export default class ReelScreen extends Component {
  state = {
    likeButton: true,
    currIndex: 0,
  };
  onBuffer = () => {
    <ActivityIndicator size="large" />;
  };
  onError = () => {
    console.log('Error while playing the video');
  };
  unlikeHandler = () => {
    this.setState({likeButton: false});
  };
  likeHandler = () => {
    this.setState({likeButton: true});
  };
  render() {
    const renderItem = ({item, index}) => {
      return (
        <View style={{flex: 1, backgroundColor: '#000'}}>
          <Video
            resizeMode="cover"
            onBuffer={this.onBuffer()}
            repeat={true}
            // paused={true}
            paused={this.state.currIndex !== index}
            poster="https://www.google.com/imgres?imgurl=https%3A%2F%2Fblog.hootsuite.com%2Fwp-content%2Fuploads%2F2021%2F03%2FExperiment_Can-Posting-Reels-Improve-Your-Overall-Instagram-Engagement_540x540.svg&imgrefurl=https%3A%2F%2Fblog.hootsuite.com%2Finstagram-reels-ads%2F&tbnid=sPojgAq_FLGMdM&vet=10CC0QMyh8ahcKEwiQ_aOmibn0AhUAAAAAHQAAAAAQAg..i&docid=0MfFPK2o549e3M&w=800&h=800&itg=1&q=reels%20thumbnail&hl=en&ved=0CC0QMyh8ahcKEwiQ_aOmibn0AhUAAAAAHQAAAAAQAg"
            posterResizeMode="cover"
            onError={this.onError()}
            source={{uri: item.url}}
            style={styles.backgroundVideo}
          />
        </View>
      );
    };
    const onChangeIndex = ({index}) => {
      this.setState({currIndex: index});
    };
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SwiperFlatList
          vertical={true}
          onChangeIndex={onChangeIndex}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  backgroundVideo: {
    width: width,
    height: height,
  },
  CameraIcon: {
    alignItems: 'flex-end',
    margin: 16,
  },
  icons: {
    tintColor: '#fff',
    width: 30,
    height: 30,
  },
  heartIcon: {
    width: 30,
    height: 30,
  },
  text: {
    color: '#fff',
    marginTop: 10,
  },
  iconProfile: {
    width: 30,
    height: 30,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#fff',
  },
  verticalPadding: {
    paddingVertical: 10,
  },
  follow: {
    color: '#fff',
  },
  followContainer: {
    borderColor: '#fff',
    borderWidth: 2,
    marginLeft: 12,
    justifyContent: 'center',
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  infoContainer: {flex: 1, marginBottom: -640, marginHorizontal: 16},
  secondFlex: {flex: 2},
  content: {flexDirection: 'row'},
  actionContainer: {alignItems: 'flex-end', margin: 16, flex: 1},
});
