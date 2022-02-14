import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {AddHighlightIcon, PlusIcon, TickIcon} from '../constants';
import {Color} from '../styles';
import Colors from '../styles/Colors';

const {width, height} = Dimensions.get('window');

class EditProfile extends Component {
  state = {
    name: this.props.name,
    username: this.props.username,
    website: this.props.website,
    bio: this.props.bio,
  };
  onSubmit = () => {
    this.props.gettingName(this.state.name);
    this.props.gettingBio(this.state.bio);
    this.props.gettingWebsite(this.state.website);
    this.props.navigation.goBack();
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image style={styles.crossIcon} source={PlusIcon} />
          </TouchableOpacity>
          <Text style={styles.text}> Edit Profile </Text>
          <TouchableOpacity onPress={() => this.onSubmit()}>
            <Image style={styles.tickIcon} source={TickIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.userContainer}>
          <Image
            style={styles.avatarLogo}
            source={require('../assets/icons/avatar.jpeg')}
          />
          <TouchableOpacity>
            <Text style={styles.txt}>Change Profile Photo</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>Name</Text>
          <TextInput
            style={styles.inputText}
            value={this.state.name}
            onChangeText={text => this.setState({name: text})}
          />
          <Text style={styles.title}>Username</Text>
          <TextInput
            style={styles.inputText}
            value={this.state.username}
            onChangeText={text => this.setState({username: text})}
          />
          <Text style={styles.title}>Website</Text>
          <TextInput
            style={styles.inputText}
            value={this.state.website}
            onChangeText={text => this.setState({website: text})}
          />
          <Text style={styles.title}>Bio</Text>
          <TextInput
            style={styles.inputText}
            value={this.state.bio}
            onChangeText={text => this.setState({bio: text})}
          />
        </View>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>Switch to Professional Account</Text>
          <Text style={styles.bottomText}>Personal Information Settings</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const props = {
    name: state.userVal.name,
    username: state.userVal.username,
    bio: state.userVal.bio,
    website: state.userVal.website,
  };
  return props;
};

const mapDispatchToProps = dispatch => {
  return {
    gettingName: name => dispatch({type: 'NAME', payload: name}),
    gettingUsername: username => dispatch({type: 'USERNAME', payload: username}),
    gettingBio: bio => dispatch({type: 'BIO', payload: bio}),
    gettingWebsite: website => dispatch({type: 'WEBSITE', payload: website}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: -150,
    marginTop: 3,
  },
  crossIcon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
    transform: [{rotate: '45deg'}],
  },
  tickIcon: {
    width: 30,
    height: 30,
    tintColor: Colors.primaryColor,
  },
  avatarLogo: {width: 80, height: 80, borderRadius: 50},
  txt: {
    color: Colors.primaryColor,
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  inputText: {
    borderColor: '#fff',
    borderBottomWidth: 1,
    width: width - 40,
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    marginBottom: 15,
  },
  title: {
    color: '#888',
    marginLeft: 20,
    marginBottom: 10,
  },
  bottomText: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: '#888',
    color: Color.primaryColor,
    marginBottom: 10,
    width: width,
  },
  bottomTextContainer: {
    // alignItems: 'center',
    marginTop: 50,
  },
});
