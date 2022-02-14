import React, {Component} from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {data} from '../Data/Video/Data';

export default class Notification extends Component {
  state = {
    loading: true,
  };
  _onLoadEnd = () => {
    this.setState({
      loading: false,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="light-content" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.followReqContainer}>
            <Image
              onLoadEnd={this._onLoadEnd}
              style={styles.avatarDp}
              source={require('../assets/icons/avatar.jpeg')}
            />
            <ActivityIndicator
              size="small"
              color="#888"
              style={styles.activityIndicator}
              animating={this.state.loading}
            />
            <View style={styles.avatarContainer}>
              <Text style={styles.numText}>100</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.text}>Follow Requests</Text>
              <Text style={styles.title}>Approve or ignore requests</Text>
            </View>
          </View>
          <Text style={[styles.text, styles.txt]}>Today</Text>
          {data.map((item, index) => {
            return (
              <View key={index}>
                {index === 4 ? (
                  <View>
                    <Text style={[styles.text, styles.txt]}>This Week</Text>
                    <View style={styles.peopleContainer}>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate('PeopleProfile', {
                            item,
                          })
                        }>
                        <Image
                          onLoadEnd={this._onLoadEnd}
                          style={styles.avatarDp}
                          source={{uri: item.profilepic}}
                        />
                        <ActivityIndicator
                          size="small"
                          color="#888"
                          style={styles.activityIndicator}
                          animating={this.state.loading}
                        />
                      </TouchableOpacity>
                      <View style={styles.txtContainer}>
                        <Text
                          onPress={() =>
                            this.props.navigation.navigate('PeopleProfile', {
                              item,
                            })
                          }
                          style={styles.text}>
                          {item.name}{' '}
                          <Text style={styles.title}>
                            mentioned in a comment @amitmehta
                          </Text>
                        </Text>
                      </View>
                      <View>
                        <Image
                          onLoadEnd={this._onLoadEnd}
                          style={styles.post}
                          source={{uri: item.status}}
                        />
                        <ActivityIndicator
                          size="small"
                          color="#888"
                          style={styles.activityIndicator}
                          animating={this.state.loading}
                        />
                      </View>
                    </View>
                  </View>
                ) : index === 7 ? (
                  <View>
                    <Text style={[styles.text, styles.txt]}>This Month</Text>
                    <View style={styles.peopleContainer}>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate('PeopleProfile', {
                            item,
                          })
                        }>
                        <Image
                          onLoadEnd={this._onLoadEnd}
                          style={styles.avatarDp}
                          source={{uri: item.profilepic}}
                        />
                        <ActivityIndicator
                          size="small"
                          color="#888"
                          style={styles.activityIndicator}
                          animating={this.state.loading}
                        />
                      </TouchableOpacity>
                      <View style={styles.txtContainer}>
                        <Text
                          onPress={() =>
                            this.props.navigation.navigate('PeopleProfile', {
                              item,
                            })
                          }
                          style={styles.text}>
                          {item.name}{' '}
                          <Text style={styles.title}>
                            commented on your photo 'Awesome 😍😍❤️❤️'
                          </Text>
                        </Text>
                      </View>
                      <View>
                        <Image
                          onLoadEnd={this._onLoadEnd}
                          style={styles.post}
                          source={{uri: item.status}}
                        />
                        <ActivityIndicator
                          size="small"
                          color="#888"
                          style={styles.activityIndicator}
                          animating={this.state.loading}
                        />
                      </View>
                    </View>
                  </View>
                ) : (
                  <View style={styles.peopleContainer}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('PeopleProfile', {
                          item,
                        })
                      }>
                      <Image
                        onLoadEnd={this._onLoadEnd}
                        style={styles.avatarDp}
                        source={{uri: item.profilepic}}
                      />
                      <ActivityIndicator
                        size="small"
                        color="#888"
                        style={styles.activityIndicator}
                        animating={this.state.loading}
                      />
                    </TouchableOpacity>
                    <View style={styles.txtContainer}>
                      <Text
                        onPress={() =>
                          this.props.navigation.navigate('PeopleProfile', {
                            item,
                          })
                        }
                        style={styles.text}>
                        {item.name}{' '}
                        <Text style={styles.title}>liked your photo</Text>
                      </Text>
                    </View>
                    <View>
                      <Image
                        onLoadEnd={this._onLoadEnd}
                        style={styles.post}
                        source={{uri: item.status}}
                      />
                      <ActivityIndicator
                        size="small"
                        color="#888"
                        style={styles.activityIndicator}
                        animating={this.state.loading}
                      />
                    </View>
                  </View>
                )}
              </View>
            );
          })}
          <View></View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#000',
  },
  avatarDp: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 20,
    marginRight: 12,
  },
  followReqContainer: {flexDirection: 'row', alignItems: 'center'},
  avatarContainer: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 50,
    padding: 2,
  },
  numText: {color: '#fff', fontWeight: '600'},
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    color: '#888',
  },
  textContainer: {
    marginLeft: 12,
  },
  peopleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignSelf: 'center',
    // alignItems: 'center',
  },
  post: {
    width: 50,
    height: 50,
    // position: 'absolute',
    // justifyContent: 'flex-end',
  },
  postContainer: {
    position: 'absolute',
    // marginLeft: 312,
    flex: 1,
    right: 2,
  },
  txtContainer: {
    marginRight: 82,
    alignSelf: 'center',
    marginTop: -20,
  },
  txt: {
    paddingVertical: 12,
  },
  activityIndicator: {
    ...StyleSheet.absoluteFill,
  },
});
