import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const Videos = () => {
  console.log('videos')

  return (
    <View style={style.container}>
      <Text>Videos</Text>
    </View>
  );
};

export default Videos;
