import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  Button,
} from 'react-native';
import {connect} from 'react-redux';
import {SearchHighlightIcon} from '../constants';
import {data} from '../Data/Video/Data';
import {getImage} from '../redux/action/DataAction';
const {width, height} = Dimensions.get('window');

class SearchScreen extends Component {
  state = {
    userImage: false,
  };
  componentDidMount() {
    this.props.fetchApi();
    this.setState({userImage: true});
  }
  render() {
    const Item = ({download_url}) => (
      <View style={styles.item}>
        <Image style={styles.image} source={{uri: download_url}} />
      </View>
    );
    const renderItem = ({item}) => <Item download_url={item.download_url} />;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.searchContainer}>
          <Image style={styles.icon} source={SearchHighlightIcon} />
          <TextInput
            style={styles.searchTextInput}
            placeholder="Search"
            placeholderTextColor="#888"
          />
        </TouchableOpacity>
        {this.state.userImage ? (
          <FlatList
            data={this.props.data}
            numColumns={3}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <ActivityIndicator />
        )}
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
  icon: {
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
    borderRadius: 5,
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
  image: {
    width: 129,
    height: 150,
  },
});
