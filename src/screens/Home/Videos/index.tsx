import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button} from 'react-native-elements';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const Videos = ({navigation}) => {
  console.log('videos');

  return (
    <View style={style.container}>
      <Text>Videos</Text>
      <Button
        title={'Video_screen'}
        onPress={() => navigation.navigate('Video_screen')}
      />
    </View>
  );
};

export default Videos;
