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

const Articles = ({navigation}) => {
  console.log('artcles')
  return (
    <View style={style.container}>
      <Text>Articles</Text>
      <Button title={'Articles_screen'} onPress={()=> navigation.navigate('Articles_screen')}/>
    </View>
  );
};

export default Articles;
