import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import DiscoverPeople from '../components/DiscoverPeople';
import {
  AddHighlightIcon,
  AddUnHighlightIcon,
  ArchiveIcon,
  CloseFriendIcon,
  CovidIcon,
  DownIcon,
  GuideIcon,
  HamburgerIcon,
  LiveIcon,
  LockIcon,
  PostIcon,
  ProfileIcon,
  QRCodeIcon,
  ReelHighlightIcon,
  ReelUnHighlightIcon,
  SavedIcon,
  SettingIcon,
  StoryAddIcon,
} from '../constants';
import {Color} from '../styles';
import {data} from '../Data/Video/Data';
import {IGPosts} from '../Data/Posts/index';
import {userData} from '../Data/UserData/index';
import RBSheet from 'react-native-raw-bottom-sheet';
import Story from '../components/Story';
import MaterialTopTab from '../components/MaterialTopTab';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('window');

class ProfileScreen extends Component {
  state = {
    down: true,
    loading: true,
  };
  pressHandler = () => {
    this.setState({down: !this.state.down});
  };
  editPressHandler = () => {
    this.props.navigation.navigate('Edit');
  };
  _onLoadEnd = () => {
    this.setState({
      loading: false,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerContainer}>
            <Image style={styles.lockIcon} source={LockIcon} />
            <Text style={styles.text}>{this.props.username}</Text>
            <Image style={styles.lockIcon} source={DownIcon} />
            <TouchableOpacity onPress={() => this.ADD.open()}>
              <Image style={styles.addIcon} source={AddUnHighlightIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.SETTINGS.open()}>
              <Image style={styles.icon} source={HamburgerIcon} />
            </TouchableOpacity>
          </View>

          {userData.map((item, index) => {
            return (
              <View key={index}>
                <View style={styles.avatarMain}>
                  <View style={styles.avatarContainer}>
                    <Image
                      onLoadEnd={this._onLoadEnd}
                      style={styles.avatarLogo}
                      source={{uri: item.avatar}}
                    />
                    <ActivityIndicator
                      size="small"
                      color="#888"
                      style={styles.activityIndicator}
                      animating={this.state.loading}
                    />
                  </View>
                  <View style={styles.userFollowersContainer}>
                    <View style={styles.userFollowers}>
                      <Text style={styles.textValue}>{item.posts}</Text>
                      <Text style={styles.texts}>Posts</Text>
                    </View>
                    <View style={styles.userFollowers}>
                      <Text style={styles.textValue}>{item.followers}</Text>
                      <Text style={styles.texts}>Followers</Text>
                    </View>
                    <View style={styles.userFollowers}>
                      <Text style={styles.textValue}>{item.following}</Text>
                      <Text style={styles.texts}>Following</Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
          <View style={{padding: 10}}>
            <Text style={styles.textValue}>{this.props.name}</Text>
            <Text style={styles.texts}>{this.props.bio}</Text>
            <Text style={styles.texts}>{this.props.website}</Text>
          </View>

          <View style={styles.editProfileContainer}>
            <TouchableOpacity
              style={styles.editProfile}
              onPress={() => this.editPressHandler()}>
              <Text style={styles.texts}>Edit Profile</Text>
            </TouchableOpacity>
            {this.state.down ? (
              <TouchableOpacity
                style={styles.downArrowContainer}
                onPress={() => this.pressHandler()}>
                <Image style={styles.downArrow} source={DownIcon} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.downArrowContainer}
                onPress={() => this.pressHandler()}>
                <Image style={styles.upArrow} source={DownIcon} />
              </TouchableOpacity>
            )}
          </View>

          <View>
            {this.state.down ? null : (
              <View>
                <View style={styles.headingContainer}>
                  <Text style={styles.newText}> Discover People </Text>
                  <Text style={styles.link}>See All</Text>
                </View>
                <ScrollView
                  style={{marginTop: -70}}
                  horizontal
                  showsHorizontalScrollIndicator={false}>
                  {data.map((item, index) => {
                    return (
                      <View key={index}>
                        <DiscoverPeople
                          userProfilePic={item.profilepic}
                          userName={item.name}
                          peoples={item.follow}
                        />
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
            )}
          </View>
          <ScrollView horizontal={true}>
            {IGPosts.map((item, index) => {
              return (
                <View key={index}>
                  <Story name={item.storyName} img={item.postImage} />
                </View>
              );
            })}
          </ScrollView>
          <RBSheet
            ref={ref => {
              this.SETTINGS = ref;
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
                <View style={styles.iconContainer}>
                  <Image style={styles.icons} source={SettingIcon} />
                  <Text style={styles.actionText}>Settings</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Image style={styles.icons} source={ArchiveIcon} />
                  <Text style={styles.actionText}>Archive</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Image style={styles.icons} source={QRCodeIcon} />
                  <Text style={styles.actionText}>OR Code</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Image style={styles.icons} source={SavedIcon} />
                  <Text style={styles.actionText}>Saved</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Image style={styles.icons} source={CloseFriendIcon} />
                  <Text style={styles.actionText}>Close Friends</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Image style={styles.icons} source={CovidIcon} />
                  <Text style={styles.actionText}>
                    COVID-19 Information Center
                  </Text>
                </View>
              </View>
            </View>
          </RBSheet>
          <RBSheet
            ref={ref => {
              this.ADD = ref;
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
                <View style={styles.iconContainer}>
                  <Image source={PostIcon} style={styles.icons} />
                  <Text style={styles.actionText}>Post</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Image style={styles.icons} source={ReelUnHighlightIcon} />
                  <Text style={styles.actionText}>Reel</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Image source={StoryAddIcon} style={styles.icons} />
                  <Text style={styles.actionText}>Story</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Image style={styles.icons} source={StoryAddIcon} />
                  <Text style={styles.actionText}>Story Highlight</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Image source={LiveIcon} style={styles.icons} />
                  <Text style={styles.actionText}>Live</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Image style={styles.icons} source={GuideIcon} />
                  <Text style={styles.actionText}>Guide</Text>
                </View>
              </View>
            </View>
          </RBSheet>
          <View style={{height: height}}>
            <MaterialTopTab />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const props = {
    username: state.userVal.username,
    password: state.userVal.password,
    name: state.userVal.name,
    bio: state.userVal.bio,
    website: state.userVal.website,
  };
  return props;
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  lockIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  addIcon: {
    tintColor: '#fff',
    width: 50,
    height: 50,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 162,
  },
  txt: {
    color: '#fff',
    fontSize: 18,
  },
  avatarLogo: {width: 80, height: 80, borderRadius: 50},
  avatarContainer: {
    borderWidth: 2,
    borderColor: '#888',
    borderRadius: 50,
    marginLeft: 12,
  },
  userFollowersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userFollowers: {
    alignItems: 'center',
    marginRight: 23,
  },
  avatarMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  textValue: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  texts: {
    fontSize: 16,
    color: '#fff',
  },
  editProfileContainer: {
    flexDirection: 'row',
    marginBottom: 18,
    marginHorizontal: 8,
  },
  editProfile: {
    borderWidth: 1,
    borderColor: '#888',
    width: width - 50,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  editText: {
    color: '#fff',
  },
  downArrowContainer: {
    borderWidth: 1,
    borderColor: '#888',
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  downArrow: {
    width: 10,
    height: 10,
    tintColor: '#fff',
    // transform: [{rotate: '180deg'}],
  },
  upArrow: {
    width: 10,
    height: 10,
    tintColor: '#fff',
    transform: [{rotate: '180deg'}],
  },
  headingContainer: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between',
    marginHorizontal: 8,
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
  activityIndicator: {
    ...StyleSheet.absoluteFill,
  },
  icons: {
    width: 25,
    height: 25,
    tintColor: '#fff',
    marginRight: 12,
    marginTop: -3,
    // alignItems: 'center',
    // textAlign: 'center',
    // alignSelf: 'center'
  },
  iconContainer: {flexDirection: 'row'},
});
