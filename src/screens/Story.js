import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
  Animated,
  TextInput,
  ImageBackground,
} from 'react-native';
import {LockIcon, MenuIcon, SendIcon} from '../constants';
import RBSheet from 'react-native-raw-bottom-sheet';

const {width, height} = Dimensions.get('window');

export default class Story extends Component {
  state = {
    progress: new Animated.Value(0),
  };
  progressAnimation = this.state.progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });
  userImage = this.props.route.params.item.profilepic;
  userName = this.props.route.params.item.name;
  storyImage = this.props.route.params.item.status;

  componentDidMount() {
    const {progress} = this.state;
    let timer = setTimeout(() => {
      this.props.navigation.goBack();
    }, 5000);
    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }
  menuHandler = () => {
    this.MENU.open();
    Animated.timing(this.state.progress).stop();
  };
  //   handlePress = () => {
  //     // this.props.navigation.goBack();
  //   };
  //   handlePressIn = () => {
  //     Animated.timing(this.state.progress).stop();
  //     // alert('')
  //   };
  //   handlePressOut = () => {
  //     this.props.navigation.navigate('Story');
  //   };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <ImageBackground
          source={{uri: this.storyImage}}
          style={styles.backgroundImage}>
          <Pressable style={{flex: 1}}>
            <View style={styles.main}>
              <View style={styles.progressBarContainer}>
                <Animated.View
                  style={{
                    height: '100%',
                    backgroundColor: '#fff',
                    width: this.progressAnimation,
                  }}
                />
              </View>
            </View>
            <View style={styles.headerContainer}>
              <Image
                style={styles.userIcon}
                source={{
                  uri: this.userImage,
                }}
              />
              <View style={{marginRight: 200, flexDirection: 'row'}}>
                <Text style={styles.text}>{this.userName}</Text>
                <Text style={styles.timeText}>20h</Text>
              </View>

              <TouchableOpacity onPress={() => this.menuHandler()}>
                <Image style={styles.icons} source={MenuIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                placeholder="Send message"
                style={styles.textInput}
                placeholderTextColor="#fff"
              />
              <Image style={styles.icons} source={SendIcon} />
            </View>
            <RBSheet
              ref={ref => {
                this.MENU = ref;
              }}
              height={150}
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
                  <Text style={[styles.actionText, {color: 'red'}]}>
                    Report...
                  </Text>
                  <Text style={styles.actionText}>Mute</Text>
                </View>
              </View>
            </RBSheet>
          </Pressable>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    position: 'relative',
  },
  main: {alignItems: 'center'},
  progressBarContainer: {
    height: 3,
    width: '95%',
    borderWidth: 1,
    backgroundColor: '#888',
    position: 'absolute',
    marginTop: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#fff',
    width: this.progressAnimation,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginHorizontal: 12,
  },
  userIcon: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  timeText: {
    color: '#888',
    fontSize: 16,
  },
  icons: {
    tintColor: '#fff',
    width: 30,
    height: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 10,
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
  textInput: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
    height: 45,
    width: '85%',
    paddingLeft: 25,
    marginRight: 10,
    // position: 'absolute',
    // bottom: 10,
  },
  textInputContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {flex: 1, height: height, width: width},
});
