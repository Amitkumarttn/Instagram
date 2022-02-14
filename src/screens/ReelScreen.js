import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Image,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import {
  CameraIcon,
  NotificationUnHighlightIcon,
  CommentIcon,
  MenuIcon,
  ProfileIcon,
  heartIcon,
  AudioWave,
  DotIcon,
  SendIcon,
} from '../constants';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import LinearGradient from 'react-native-linear-gradient';
import {data} from '../Data/Video/Data';
import RBSheet from 'react-native-raw-bottom-sheet';
const {height, width} = Dimensions.get('window');

export default class ReelScreen extends Component {
  state = {
    likeButton: true,
    currIndex: 0,
    videoRef: null,
    mute: true,
  };
  // componentDidMount({index}) {
  //   if (!!this.state.videoRef.current) {
  //     this.state.videoRef.current.seek(0);
  //   }
  // }
  //useEffect(() => {
  //   if (!!videoRef.current) {
  //     videoRef.current.seek(0);
  //   }
  //}, [currIndex])
  onBuffer = () => {
    <ActivityIndicator size="large" />;
  };
  onError = () => {
    // console.log('Error while playing the video');
  };
  // unlikeHandler = () => {
  //   this.setState({likeButton: false});
  // };
  // likeHandler = () => {
  //   this.setState({likeButton: true});
  // };
  onChangeIndex = ({index}) => {
    this.setState({currIndex: index});
  };
  renderItem = ({item, index}) => {
    // console.log(item);
    return (
      <View style={{flex: 1, height: height - 130}}>
        <StatusBar barStyle="light-content" />
        <Video
          resizeMode="cover"
          onBuffer={this.onBuffer()}
          playInBackground={false}
          paused={this.state.currIndex !== index}
          onError={this.onError()}
          source={{uri: item.url}}
          style={styles.backgroundVideo}
          // muted={this.state.mute}
        />
        <View style={{flex: 1}}>
          <TouchableOpacity style={styles.CameraIcon}>
            <Image style={styles.icons} source={CameraIcon} />
          </TouchableOpacity>

          <View style={styles.infoContainer}>
            <View style={styles.secondFlex} />
            <View style={styles.content}>
              <Image style={styles.iconDp} source={{uri: item.profilepic}} />
              <Text style={styles.text}>{item.title}</Text>
              <TouchableOpacity style={styles.followContainer}>
                <Text style={styles.follow}>Follow</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.audioContainer}>
              <Image style={styles.audioIcons} source={AudioWave} />
              <Text style={styles.text}>{item.audioname}</Text>
              <Image style={styles.dotIcons} source={DotIcon} />
              <Text style={styles.text}>Original Audio</Text>
            </View>
            <Text style={styles.text}>{item.hashtags}</Text>
          </View>

          <View style={styles.actionContainer}>
            <View style={styles.secondFlex} />
            <View style={styles.verticalPadding}>
              <TouchableOpacity>
                {item.isLike ? (
                  <Image
                    onPress={() => {
                      item.isLike = !item.isLike;
                    }}
                    style={styles.heartIcon}
                    source={heartIcon}
                  />
                ) : (
                  <Image
                    onPress={() => {
                      item.isLike = !item.isLike;
                    }}
                    style={styles.icons}
                    source={NotificationUnHighlightIcon}
                  />
                )}
              </TouchableOpacity>
              <Text style={styles.text}>{item.likes}</Text>
            </View>
            <TouchableOpacity style={styles.verticalPadding}>
              <Image style={styles.icons} source={CommentIcon} />
              <Text style={styles.text}>12.8k</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.verticalPadding}>
              <Image style={styles.icons} source={SendIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.RBSheet.open()}
              style={styles.verticalPadding}>
              <Image style={styles.icons} source={MenuIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.verticalPadding}>
              <Image style={styles.iconProfile} source={ProfileIcon} />
            </TouchableOpacity>
          </View>
          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height={400}
            closeOnPressMask={true}
            openDuration={250}
            close={false}
            customStyles={{
              container: {
                backgroundColor: '#121212',
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
              },
            }}>
            <View>
              <View style={styles.line} />
              <View style={styles.actionTextContainer}>
                <Text style={styles.actionText}>Report...</Text>
                <Text style={styles.actionText}>Not Interested</Text>
                <Text style={styles.actionText}>Copy Link</Text>
                <Text style={styles.actionText}>Share to...</Text>
                <Text style={styles.actionText}>Save</Text>
                <Text style={styles.actionText}>Remix This Reel</Text>
              </View>
            </View>
          </RBSheet>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SwiperFlatList
          data={data}
          vertical
          renderItem={this.renderItem}
          onChangeIndex={this.onChangeIndex}
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
    // width: width,
    // height: height,
    // position: 'absolute',
    ...StyleSheet.absoluteFill,
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
  audioIcons: {
    tintColor: '#fff',
    width: 20,
    height: 20,
    marginTop: 10,
    marginHorizontal: 5,
  },
  dotIcons: {
    width: 5,
    height: 5,
    tintColor: '#fff',
    marginTop: 10,
    marginHorizontal: 4,
  },
  audioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
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
  iconDp: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
    marginRight: 10,
    marginTop: 2,
  },
  verticalPadding: {
    paddingVertical: 10,
  },
  follow: {
    color: '#fff',
    fontSize: 12,
  },
  followContainer: {
    borderColor: '#fff',
    borderWidth: 2,
    marginLeft: 10,
    justifyContent: 'center',
    paddingHorizontal: 5,
    height: 25,
    marginTop: 6,
    borderRadius: 8,
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    marginBottom: -640,
    marginHorizontal: 16,
  },
  secondFlex: {flex: 2},
  content: {flexDirection: 'row'},
  actionContainer: {alignItems: 'flex-end', margin: 16, flex: 1},
  description: {
    color: '#fff',
    width: width - 100,
    marginTop: 10,
  },
  line: {
    width: 60,
    height: 5,
    marginVertical: 12,
    backgroundColor: '#888',
    borderRadius: 50,
    alignSelf: 'center',
  },
  actionTextContainer: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 30,
  },
});
