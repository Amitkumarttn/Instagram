import {StyleSheet, Text, View} from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';
import React from 'react';

const images = [
  {
    image:
      'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    desc: 'Silent Waters in the mountains in midst of Himilayas',
  },
  {
    image:
      'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
];

const SponsorComp = () => {
  return (
    <View style={styles.container}>
      <FlatListSlider
        data={images}
        loop={true}
        // contentContainerStyle={{marginBottom: 16}}
        indicatorContainerStyle={{marginBottom: 16, }}
        onPress={() => {}}
      />
    </View>
  );
};

export default SponsorComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008080',
  },
});
