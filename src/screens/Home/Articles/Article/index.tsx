import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const Article = () => {
  console.log('artcle')

  return (
    <View style={style.container}>

      <Text>Article</Text>
    </View>
  );
};

export default Article;
