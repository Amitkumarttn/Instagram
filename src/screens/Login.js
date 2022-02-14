import React, {Component} from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Modal,
  Platform,
  StatusBar,
} from 'react-native';
import {Color} from '../styles';
import {
  InstagramLogo,
  FacebookIcon,
  PasswordHideIcon,
  PasswordShowIcon,
} from '../constants';

const {width, height} = Dimensions.get('window');

export default class Login extends Component {
  state = {
    hide: true,
    showPassword: true,
  };
  handlePress = () => {
    this.props.navigation.navigate('Home');
  };
  handleHideIconPress = () => {
    this.setState({hide: !this.state.hide});
    this.setState({showPassword: false});
  };
  handleShowIconPress = () => {
    this.setState({hide: !this.state.hide});
    this.setState({showPassword: true});
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'#000'} />
        <View style={styles.countryCountry}>
          <Text style={styles.countryText}>English (India)</Text>
        </View>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={InstagramLogo} />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Phone number, email or username"
            placeholderTextColor="#fff"
          />
          <View>
            <TextInput
              style={styles.textInput}
              secureTextEntry={this.state.showPassword}
              placeholder="Password"
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
        </View>
        <TouchableOpacity style={styles.loginContainer}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Forgot your login details?{' '}
            <Text style={styles.text2}>Get help logging in.</Text>
          </Text>
        </View>
        <View style={styles.OrContainer}>
          <View style={styles.Line} />
          <Text style={styles.orText}>OR</Text>
        </View>

        <TouchableOpacity
          style={styles.fbContainer}
          onPress={() => {}}>
          <Image style={styles.password} source={FacebookIcon} />
          <Text style={styles.continueTxt}>Continue as Amit Mehta</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <View style={styles.Line2} />
          <Text style={styles.text}>
            Don't have an account?{' '}
            <Text
              onPress={() => this.props.navigation.navigate('Signup')}
              style={styles.text2}>
              Sign up.
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  logo: {
    tintColor: '#fff',
    width: 180,
    height: 70,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 150 : 40,
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: '#464646',
    width: width - 50,
    height: 50,
    borderRadius: 4,
    paddingLeft: 25,
    marginBottom: 18,
  },
  textInputContainer: {
    alignItems: 'center',
  },
  loginContainer: {
    backgroundColor: '#1F4A75',
    width: width - 50,
    height: 50,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: '#496B91',
    fontSize: 14,
    fontWeight: 'bold',
  },
  textContainer: {
    marginVertical: 15,
  },
  text: {
    color: '#888',
  },
  text2: {
    color: '#fff',
    fontWeight: 'bold',
  },
  password: {
    width: 25,
    height: 25,
    borderRadius: 50,
    marginRight: 5,
  },
  fbContainer: {
    backgroundColor: Color.primaryColor,
    width: width - 50,
    height: 50,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  continueTxt: {
    fontWeight: 'bold',
    color: '#fff',
  },
  orText: {
    color: '#888',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: '#000',
    paddingHorizontal: 12,
    marginTop: -10,
  },
  Line: {
    width: width - 50,
    height: 1,
    backgroundColor: '#888',
  },
  Line2: {
    width: width,
    height: 1,
    backgroundColor: '#888',
    marginBottom: 15,
  },
  OrContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  signupContainer: {
    marginVertical: 100,
    alignItems: 'center',
  },
  countryText: {
    color: '#888',
  },
  countryCountry: {
    marginTop: Platform.OS === 'android' ? 30 : null,
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
