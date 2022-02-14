import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import {PasswordHideIcon, PasswordShowIcon} from '../constants';
import {Color} from '../styles';
import AsyncStorageData from '@react-native-async-storage/async-storage';
import Realm from 'realm';
import {Task} from '../Database/Schema/SignupSchema';
import {UUID, ObjectID} from 'bson';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('window');
class SignUp extends Component {
  state = {
    username: '',
    password: '',
    button: true,
    usernameShow: true,
    hide: true,
    showPassword: true,
    Credentials: null,
  };
  async componentDidMount() {
    const user = await AsyncStorageData.getItem('UserValue');
    // console.log('Name: =>', user);
    // console.log('Name', this.state.Credentials);
    this.setState({
      Credentials: user,
    });
  }
  handlePress = () => {
    this.setState({button: true});
    this.setState({usernameShow: false});
  };
  handleHideIconPress = () => {
    this.setState({hide: !this.state.hide});
    this.setState({showPassword: false});
  };
  handleShowIconPress = () => {
    this.setState({hide: !this.state.hide});
    this.setState({showPassword: true});
  };
  submitHandlePress = async () => {
    this.setState({button: true});
    this.setState({usernameShow: false});

    var USER_DATA = {
      name: this.state.username,
      password: this.state.password,
    };
    // console.log('UserValue =>', JSON.stringify(USER_DATA));
    await AsyncStorageData.setItem('UserValue', JSON.stringify(USER_DATA));

    const user = await AsyncStorageData.getItem('UserValue');
    this.setState({
      Credentials: user,
    });
    //sending User value to REDUX Store
    this.props.gettingUsername(this.state.username);
    this.props.gettingPassword(this.state.password);

    this.realmFunction(); // DATABASE FUNCTION
    this.props.navigation.navigate('Tab');
  };

  realmFunction = () => {
    const {username, password} = this.state;
    Realm.open({
      schema: [Task],
    })
      .then(realm => {
        realm.write(() => {
          realm.create('Signup', {
            id: new ObjectID(),
            username: username,
            password: password,
          });
        });
        this.setState({
          username: '',
          password: '',
        });
        console.log('SIGNUP SUCCESSFULLY');
        realm.close();
      })
      .catch(err => {
        console.log('Error', err);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'#000'} />
        {this.state.usernameShow ? (
          <View>
            <Text style={styles.heading}> Choose Username </Text>
            <Text style={styles.subHeading}>
              {' '}
              You can always change it later.{' '}
            </Text>
          </View>
        ) : (
          <View style={styles.passwordContainer}>
            <Text style={styles.heading}> Create a Password </Text>
            <Text style={styles.passwordSubHeading}>
              For security, your password must be 6 characters or more.
            </Text>
          </View>
        )}
        {this.state.usernameShow ? (
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              onChangeText={text => {
                this.setState({username: text});
                this.setState({button: false});
                if (this.state.username.length === 0) {
                  this.setState({button: true});
                }
              }}
              value={this.state.username}
              placeholderTextColor="#fff"
            />
          </View>
        ) : (
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={this.state.showPassword}
              onChangeText={text => {
                this.setState({password: text});
                this.setState({button: false});
                if (this.state.password.length === 0) {
                  this.setState({button: true});
                }
              }}
              value={this.state.password}
              placeholderTextColor="#fff"
            />
            {this.state.hide ? (
              <TouchableOpacity
                onPress={() => this.handleHideIconPress()}
                style={styles.passwordIconContainer}>
                <Image style={styles.hideIcon} source={PasswordHideIcon} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => this.handleShowIconPress()}
                style={styles.passwordIconContainer}>
                <Image style={styles.showIcon} source={PasswordShowIcon} />
              </TouchableOpacity>
            )}
          </View>
        )}
        {this.state.usernameShow ? (
          <TouchableOpacity
            onPress={() => this.handlePress()}
            disabled={this.state.button}
            style={[
              styles.loginContainer,
              {backgroundColor: this.state.button ? '#1F4A75' : '#1878F3'},
            ]}>
            <Text
              style={[
                styles.loginText,
                {color: this.state.button ? '#496B91' : '#fff'},
              ]}>
              Next
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => this.submitHandlePress()}
            disabled={this.state.button}
            style={[
              styles.loginContainer,
              {backgroundColor: this.state.button ? '#1F4A75' : '#1878F3'},
            ]}>
            <Text
              style={[
                styles.loginText,
                {color: this.state.button ? '#496B91' : '#fff'},
              ]}>
              Submit
            </Text>
          </TouchableOpacity>
        )}
        {/*seconnd walaa*/}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    gettingUsername: username =>
      dispatch({type: 'USERNAME', payload: username}),
    gettingPassword: password =>
      dispatch({type: 'PASSWORD', payload: password}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  passwordContainer: {
    alignItems: 'center',
  },
  passwordSubHeading: {
    width: width - 60,
    color: '#888',
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'center',
  },
  heading: {
    color: '#fff',
    fontSize: 25,
    marginVertical: 10,
  },
  subHeading: {
    color: '#888',
    fontSize: 15,
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: '#464646',
    width: width - 50,
    height: 50,
    borderRadius: 4,
    paddingLeft: 25,
    marginBottom: 18,
    color: '#fff',
  },
  textInputContainer: {
    alignItems: 'center',
  },
  loginContainer: {
    width: width - 50,
    height: 50,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  hideIcon: {
    tintColor: '#fff',
    width: 25,
    height: 25,
    marginHorizontal: 12,
    marginTop: 12,
  },
  showIcon: {
    tintColor: Color.primaryColor,
    width: 25,
    height: 25,
    marginHorizontal: 12,
    marginTop: 12,
  },
  passwordIconContainer: {position: 'absolute', alignSelf: 'flex-end'},
});
