import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import Realm from 'realm';
import {Task} from '../Database/Schema/UserSchema';
// import {BSON} from 'realm';
import {UUID, ObjectID} from 'bson';
import {connect} from 'react-redux';
import {getImage} from '../redux/action/DataAction';

const uuid = new UUID();

class SearchScreen extends Component {
  state = {
    name: '',
    salary: '',
    age: '',
    myUser: [],
  };
  addUser = () => {
    const {name, salary, age} = this.state;
    Realm.open({
      schema: [Task],
    })
      .then(realm => {
        realm.write(() => {
          realm.create('User', {
            id: new ObjectID(),
            name: name,
            age: age,
            salary: salary,
          });
        });
        // this.setState({
        //   name: '',
        //   salary: '',
        //   age: '',
        // });
        console.log('Add User Successfully');
        console.log('==>', this.state.myUser);
        realm.close();
      })
      .catch(err => {
        console.log('ERR', err);
      });
  };
  showUser = () => {
    Realm.open({
      schema: [Task],
    }).then(realm => {
      this.setState({myUser: realm.objects('User')});
      console.log('USER: ', realm.objects('User'));
    });
  };
  render() {
    const {myUser} = this.state;
    const {data} = this.props;
    return (
      <View>
        <Button title="ADD USER" onPress={() => this.addUser()} />
        <Button title="SHOW USER" onPress={() => this.showUser()} />
        <TextInput
          placeholder="Name"
          value={this.state.name}
          onChangeText={text => this.setState({name: text})}
        />
        <TextInput
          placeholder="Salary"
          value={this.state.salary}
          onChangeText={text => this.setState({salary: text})}
        />
        <TextInput
          placeholder="Age"
          value={this.state.age}
          onChangeText={text => this.setState({age: text})}
        />
        <View>
          {myUser.map((item, index) => (
            <View key={index}>
              <Text>ID: {`${item.id}`}</Text>
              <Text>Name: {item.name}</Text>
              <Text>Salary: {item.salary}</Text>
              <Text>Age: {item.age}</Text>
            </View>
          ))}
        </View>
        <Text>{this.props.stateVal}</Text>
        <Text>{JSON.stringify(this.props.data)}</Text>
        <Button title="Fetch" onPress={() => this.props.fetchApi()} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const props = {stateVal: state.userVal.name, data: state.imageVal.arrData};
  console.log(state.imageVal.arrData);
  return props;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchApi: () => getImage(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
