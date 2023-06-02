import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const Video = () => {
  console.log('video')

  return (
    <View style={style.container}>

      <Text>Video</Text>
    </View>
  )
}

export default Video